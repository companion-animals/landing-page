import { useCallback } from "react";

import { GetServerSideProps } from "next";

import { loadTossPayments } from "@tosspayments/payment-sdk";
import { isObjectIdOrHexString } from "mongoose";
import { parseCookies } from "nookies";

import Button from "src/components/atom/button/BasicButton";
import { FORBIDDEN, BAD_REQUEST } from "src/constatnts/networkStatus";
import { getUserByID } from "src/db/auth";
import { OrderModel } from "src/db/models/Order";
import { getOrderByID } from "src/db/payment";
import { getDateInYYYYMMDD } from "src/utils/date";
import { decodeLoginToken } from "src/utils/jwt";

const clientKey = "test_ck_D5GePWvyJnrK0W0k6q8gLzN97Eoq";

interface Props
  extends Pick<
    OrderModel,
    | "animalCategory"
    | "animalName"
    | "sitterName"
    | "price"
    | "sittingEndDate"
    | "sittingStartDate"
  > {
  orderID: string;
  userName: string;
  userEmail: string;
}

const TossPaymentPage = ({
  sitterName,
  sittingStartDate,
  sittingEndDate,
  animalName,
  price,
  orderID,
  userName,
  userEmail,
}: Props) => {
  const payWithCard = useCallback(async () => {
    const tossPayments = await loadTossPayments(clientKey);

    tossPayments.requestPayment("카드", {
      amount: price,
      orderId: orderID,
      orderName: "우리동네 특별반 시터 이용 요금",
      successUrl: `${window.location.origin}/payment/success`,
      failUrl: `${window.location.origin}/fail`,
      customerName: userName,
      customerEmail: userEmail,
    });
  }, [orderID, price, userEmail, userName]);

  // todo: title and seo crawl block
  return (
    <>
      결제 관련 정보
      {userName}님{animalName}을(를)
      {getDateInYYYYMMDD(sittingStartDate)} ~{" "}
      {getDateInYYYYMMDD(sittingEndDate)} 까지
      {sitterName}님에게
      {price} 원에 시팅 의뢰하시겠습니까?
      <Button onClick={payWithCard}>카드결제</Button>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  query,
}) => {
  const cookies = parseCookies({ req });
  const { token } = cookies;

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const decoded = decodeLoginToken(token);
  const { orderID } = query;

  if (!orderID || !isObjectIdOrHexString(orderID)) {
    return { notFound: true };
  }

  const order = await getOrderByID(orderID as string);

  if (!order) {
    return { notFound: true };
  }

  const {
    sitterName,
    sittingStartDate,
    sittingEndDate,
    animalName,
    userID,
    isPaid,
    price,
  } = order;
  const user = await getUserByID(userID, { email: 1, name: 1 });

  if (!user) {
    res.statusCode = FORBIDDEN;
    res.statusMessage = "권한이 없는 요청입니다.";
    return { props: {} };
  }

  const { name, email } = user;

  if (decoded._id !== userID.toString()) {
    res.statusCode = FORBIDDEN;
    res.statusMessage = "권한이 없는 요청입니다.";
    return { props: {} };
  }

  if (isPaid) {
    res.statusCode = BAD_REQUEST;
    res.statusMessage = "이미 결제된 주문입니다.";
    return { props: {} };
  }

  return {
    props: {
      sitterName,
      sittingStartDate,
      sittingEndDate,
      animalName,
      price,
      orderID: order._id.toString(),
      userName: name,
      userEmail: email,
    },
  };
};

export default TossPaymentPage;
