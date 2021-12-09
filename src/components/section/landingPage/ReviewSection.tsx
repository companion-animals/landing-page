import styled from "styled-components";

import CardWithQuotationMark from "src/components/card/cardWithQuotationMark";
import { ExtraBold44, Light44 } from "src/components/text/Typographies";
import useScrollFadeIn from "src/hooks/useScrollFadeIn";

const ReviewSection = () => {
  const {
    firstCardAnimatedItems,
    secondCardAnimatedItems,
    thirdCardAnimatedItems,
  } = useReviewSection();

  return (
    <Container>
      <TitleWrapper>
        <LightText>특별한 아이들의</LightText>
        <BoldText>특별한 후기</BoldText>
      </TitleWrapper>
      <ContentWrapper>
        <Card
          animatedItem={firstCardAnimatedItems}
          content={`저희 햄찌가 많이 예민한\n아이라 걱정이 많았는데\n건강하게 보살펴주셔서\n덕분에 맘놓고\n여행 다녀올 수 있었네요\n감사합니다 ♥`}
        />
        <Card
          animatedItem={secondCardAnimatedItems}
          content={`케이지랑 사육환경이\n너무 잘 갖춰진 시터님이라 \n안심하고 맡겼어요!\n다음에도 맡길 일 있으면\n무조건 특별반 통해\n맡길거 같아요`}
        />
        <Card
          animatedItem={thirdCardAnimatedItems}
          content={`벌써 두번째인데\n밑고 맏기게 되네요.\n항상  먼저 전화주시고\n저희 게코 잘 챙겨주셔서 \n감사합니다.`}
        />
      </ContentWrapper>
    </Container>
  );
};
export default ReviewSection;

const useReviewSection = () => {
  const firstCardAnimatedItems = useScrollFadeIn({ direction: "up" });
  const secondCardAnimatedItems = useScrollFadeIn({
    direction: "up",
    delay: 200,
  });
  const thirdCardAnimatedItems = useScrollFadeIn({
    direction: "up",
    delay: 400,
  });

  return {
    firstCardAnimatedItems,
    secondCardAnimatedItems,
    thirdCardAnimatedItems,
  };
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 100px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LightText = styled(Light44)`
  @media screen and (max-width: 900px) {
    font-size: 36px;
  }
`;

const BoldText = styled(ExtraBold44)`
  @media screen and (max-width: 900px) {
    font-size: 36px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  width: 900px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: -35px;
    width: auto;
  }
`;

const Card = styled(CardWithQuotationMark)`
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.32);
  border: 1px solid #79cea7;

  @media screen and (max-width: 900px) {
    margin-bottom: 48px;
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.32);
  }
`;
