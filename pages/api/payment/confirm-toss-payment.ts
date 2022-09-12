// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { NOT_FOUND, BAD_REQUEST } from "src/constatnts/networkStatus";

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
  if (!data.amount || !data.orderId || !data.paymentKey) {
    res.status(BAD_REQUEST).json({ message: "잘못된 요청입니다." });
  }

  // todo: order 찾고 amount 를 비교해서 일치하는지 확인. 일지 안하면 res
  // todo: 결제 진행
  // todo: order 상태를 결제된 것으로 상태 변경
  // todo: res 반환
  // todo: slack noti
}
