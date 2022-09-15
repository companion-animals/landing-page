import { useEffect, useState, useRef } from "react";

import lottie from "lottie-web";
import styled from "styled-components";
import tw from "twin.macro";

import FadeIn from "src/components/animation/FadeIn";
import CenterContentTemplate from "src/components/template/CenterContentTemplate";
import { OK } from "src/constatnts/networkStatus";
import { confirmTossPayment } from "src/controller/paymentController";
import useURLQuery from "src/hooks/useURLQuery";

const Title = styled.span`
  ${tw`
		text-2xl
		font-bold
		text-gray-900
		mb-4
	`}
`;

const Description = styled.span`
  ${tw`
		text-sm
		mb-4
		text-gray-600
	`}
`;

const AnimationContainer = styled.div`
  ${tw`
		w-40
		md:w-60
	`}
`;

const FadeInContainer = styled(FadeIn)`
  ${tw`
		flex
		flex-col
		items-center
	`}
`;

const PaymentSuccessPage = () => {
  const querys = useURLQuery();
  const loadingContainer = useRef<HTMLDivElement>(null);
  const successPayContainer = useRef<HTMLDivElement>(null);
  const failPayContainer = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccessConfirmPayment, setIsSuccessConfirmPayment] = useState(false);
  const [failMessage, setFailMessage] = useState(false);

  useEffect(() => {
    if (loadingContainer.current) {
      lottie.loadAnimation({
        container: loadingContainer.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        path: "/animations/hamster-running-loading.json",
      });
    }
    if (successPayContainer.current) {
      lottie.loadAnimation({
        container: successPayContainer.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        path: "/animations/pay-success.json",
      });
    }
    if (failPayContainer.current) {
      lottie.loadAnimation({
        container: failPayContainer.current,
        renderer: "svg",
        loop: false,
        autoplay: true,
        path: "/animations/pay-fail.json",
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    loadingContainer.current,
    successPayContainer.current,
    failPayContainer.current,
  ]);

  useEffect(() => {
    const confirmPayment = async () => {
      const sendData = {
        paymentKey: querys.paymentKey,
        orderId: querys.orderId,
        amount: Number(querys.amount),
      };
      try {
        const { status, message } = await confirmTossPayment(sendData);
        setIsSuccessConfirmPayment(status === OK);
        setFailMessage(message ?? "");
      } catch (error) {
        // error handling
        console.error(error);
        setFailMessage("결제 요청에 실패했어요. 잠시 후에 다시 시도해주세요!");
      } finally {
        setIsLoading(false);
      }
    };

    confirmPayment();
  }, [querys]);

  return (
    <CenterContentTemplate>
      {isLoading ? (
        <FadeIn>
          <AnimationContainer ref={loadingContainer} />
        </FadeIn>
      ) : (
        <FadeInContainer>
          <Title>
            {isSuccessConfirmPayment ? "결제 완료했어요!" : "결제 실패했어요!"}
          </Title>
          <Description>
            {isSuccessConfirmPayment
              ? "1 ~ 2일 내에 시터님이 연락을 드릴거에요!"
              : failMessage}
          </Description>
          {isSuccessConfirmPayment ? (
            <AnimationContainer ref={successPayContainer} />
          ) : (
            <AnimationContainer ref={failPayContainer} />
          )}
        </FadeInContainer>
      )}
    </CenterContentTemplate>
  );
  return;
};

export default PaymentSuccessPage;
