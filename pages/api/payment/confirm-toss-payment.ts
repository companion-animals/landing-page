// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { parseCookies } from "nookies";

import {
  OK,
  NOT_FOUND,
  BAD_REQUEST,
  UNAUTHORIZED,
  FORBIDDEN,
  SERVER_ERROR,
} from "src/constatnts/networkStatus";
import { getOrderByID } from "src/db/payment";
import { decodeLoginToken } from "src/utils/jwt";

interface ApiRequest extends NextApiRequest {
  body: Partial<ConfirmTossPaymentData>;
}

type Data = {
  message?: string;
};

export default async function handler(
  req: ApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== "POST") {
    res.status(NOT_FOUND).json({});
    return;
  }

  const data = req.body;

  const { amount, orderId, paymentKey } = data;

  if (!amount || !orderId || !paymentKey) {
    res.status(BAD_REQUEST).json({ message: "잘못된 요청입니다." });
    return;
  }

  const cookies = parseCookies({ req });
  const { token } = cookies;

  if (!token) {
    res.status(UNAUTHORIZED).json({});
    return;
  }

  const decoded = decodeLoginToken(token);
  const order = await getOrderByID(orderId, { price: 1, isPaid: 1, userID: 1 });

  const isWrongRequest = !order || order.isPaid || order.price !== amount;
  const isAlreadyPaid = order && order.isPaid;

  if (isWrongRequest) {
    res.status(BAD_REQUEST).json({
      message: isAlreadyPaid ? "이미 결제된 주문입니다." : "잘못된 요청입니다.",
    });
    return;
  }

  if (decoded._id !== order.userID.toString()) {
    res.status(FORBIDDEN).json({ message: "권한이 없는 요청입니다." });
    return;
  }

  const { status, paymentResultData } = await confirmTossPayment({
    amount,
    orderId,
    paymentKey,
  });

  if (status !== OK) {
    res
      .status(SERVER_ERROR)
      .json({ message: "결제에 실패했습니다. 다시 한번 시도해주세요." });
    // eslint-disable-next-line no-console
    console.error(paymentResultData);
    return;
  }

  order.tossPaymentResult = paymentResultData;
  order.isPaid = true;
  order.markModified("tossPaymentResult");

  await order.save();

  res.status(OK).json({});

  // todo: slack noti
}

async function confirmTossPayment(data: ConfirmTossPaymentData) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(
        `${process.env.TOSS_PAYMENT_SECRET_KEY as string}:`,
      ).toString("base64")}`,
    },
    body: JSON.stringify(data),
  };
  const response = await fetch(
    "https://api.tosspayments.com/v1/payments/confirm",
    requestOptions,
  );
  const { status } = response;

  const paymentResultData = await response.json();

  return { status, paymentResultData };
}
