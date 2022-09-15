import { useEffect, useRef } from "react";

import lottie from "lottie-web";
import styled from "styled-components";
import tw from "twin.macro";

import CenterContentTemplate from "src/components/template/CenterContentTemplate";
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
		h-40
		md:h-60
	`}
`;

const FadeInContainer = styled.div`
  ${tw`
		flex
		flex-col
		items-center
		animate-fade-in-up
	`}
`;

const PaymentFailPage = () => {
  const querys = useURLQuery();
  const failPayContainer = useRef<HTMLDivElement>(null);

  useEffect(() => {
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
  }, [failPayContainer]);

  return (
    <CenterContentTemplate>
      <FadeInContainer>
        <Title>결제 실패했어요!</Title>
        <Description>{querys.message}</Description>

        <AnimationContainer ref={failPayContainer} />
      </FadeInContainer>
    </CenterContentTemplate>
  );
};

export default PaymentFailPage;
