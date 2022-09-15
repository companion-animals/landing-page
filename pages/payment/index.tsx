import { useCallback, useState, ChangeEventHandler } from "react";

import { GetServerSideProps } from "next";

import { isObjectIdOrHexString } from "mongoose";
import { parseCookies } from "nookies";
import { toast } from "react-toastify";
import styled from "styled-components";
import tw from "twin.macro";

import BottomFixedButton from "src/components/atom/button/BottomFixedButton";
import InfoBox from "src/components/box/InfoBox";
import SEO from "src/components/head/SEOAndOG";
import HeaderWithTitle from "src/components/header/HeaderWithTitle";
import RadioWithLabel from "src/components/molecules/RadioWithLabel";
import KeyValueTable, {
  TableRowProps,
} from "src/components/table/KeyValueTable";
import MaxWidthContentTemplate from "src/components/template/MaxWidthContentTemplate";
import { FORBIDDEN, BAD_REQUEST } from "src/constatnts/networkStatus";
import { getUserByID } from "src/db/auth";
import { OrderModel } from "src/db/models/Order";
import { getOrderByID } from "src/db/payment";
import { getDateInYYYYMMDD } from "src/utils/date";
import { decodeLoginToken } from "src/utils/jwt";
import { numberWithCommas } from "src/utils/number";
import { pay, PayMethod } from "src/utils/payment";

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

const Container = styled(MaxWidthContentTemplate)`
  ${tw`
		py-8
		px-4
		sm:px-8
	`}
`;

const Title = styled.h3`
  ${tw`
		text-base
		font-bold
		mt-2
		mb-2
		text-gray-900
	`}
`;

const RadioButton = styled(RadioWithLabel)`
  ${tw`
		my-0.5
	`}
`;

const Table = styled(KeyValueTable)``;

const TossPaymentPage = ({
  sitterName,
  sittingStartDate,
  sittingEndDate,
  animalName,
  animalCategory,
  price,
  orderID,
  userName,
  userEmail,
}: Props) => {
  const [payMethod, setPayMethod] = useState(PayMethod.CARD);
  const onPaymentMethodChange: ChangeEventHandler<HTMLInputElement> =
    useCallback((event) => {
      setPayMethod(event.currentTarget.value as PayMethod);
    }, []);
  const payWithCard = useCallback(async () => {
    try {
      await pay({
        method: payMethod,
        price,
        orderID,
        orderName: "우리동네 특별반 시터 이용 요금",
        userName,
        userEmail,
      });
    } catch (error) {
      toast.error((error as Error).message);
    }
  }, [orderID, payMethod, price, userEmail, userName]);

  const tableData: TableRowProps[] = [
    {
      key: <Title>서비스 이용요금</Title>,
      value: <Title>{numberWithCommas(price)}원</Title>,
    },
    { key: "시터 명", value: sitterName },
    {
      key: "시팅 기간",
      value: `${getDateInYYYYMMDD(sittingStartDate)} - ${getDateInYYYYMMDD(
        sittingEndDate,
      )}`,
    },
    { key: "반려동물", value: `${animalName}(${animalCategory})` },
  ];

  return (
    <>
      <SEO title="결제하기 - 우리동네 특별반" allowSearchIndex={false} />
      <HeaderWithTitle title="결제하기" />
      <Container>
        <Title>결제 정보</Title>
        <InfoBox>
          <Table data={tableData} />
        </InfoBox>
        <Title>결제 방법</Title>
        <InfoBox>
          <RadioButton
            label="신용카드"
            id="card"
            value={PayMethod.CARD}
            name="paymentMethod"
            checked={payMethod === PayMethod.CARD}
            onChange={onPaymentMethodChange}
          />
          <RadioButton
            label="계좌이체"
            id="transfer"
            value={PayMethod.TRANSFER}
            name="paymentMethod"
            checked={payMethod === PayMethod.TRANSFER}
            onChange={onPaymentMethodChange}
          />
          <RadioButton
            label="휴대폰"
            id="phone"
            value={PayMethod.PHONE}
            name="paymentMethod"
            checked={payMethod === PayMethod.PHONE}
            onChange={onPaymentMethodChange}
          />
        </InfoBox>
      </Container>
      <BottomFixedButton onClick={payWithCard}>결제하기</BottomFixedButton>
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
        // todo: 로그인 완료하면 다시 결제페이지로 이동할 수 있도록 로직 구성
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

  const order = await getOrderByID(orderID as string, { sitterPhoneNum: 0 });

  if (!order) {
    return { notFound: true };
  }

  const {
    sitterName,
    sittingStartDate,
    sittingEndDate,
    animalName,
    animalCategory,
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
      animalCategory,
      price,
      orderID: order._id.toString(),
      userName: name,
      userEmail: email,
    },
  };
};

export default TossPaymentPage;
