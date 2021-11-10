import styled from "styled-components";

import CardWithQuotationMark from "src/components/atoms/card/cardWithQuotationMark";
import { ExtraBold56, Light56 } from "src/components/atoms/text/Typographies";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 117px;
  padding-bottom: 100px;
  background-color: #8481e4;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LightText = styled(Light56)`
  color: #ffffff;
`;

const BoldText = styled(ExtraBold56)`
  color: #ffffff;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  width: 1090px;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    margin-bottom: -35px;
    width: auto;
  }
`;

const Card = styled(CardWithQuotationMark)`
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.32);

  @media screen and (max-width: 750px) {
    margin-bottom: 48px;
  }
`;

const ReviewSection = () => (
  <Container>
    <TitleWrapper>
      <LightText>특별한 아이들의</LightText>
      <BoldText>특별한 후기</BoldText>
    </TitleWrapper>
    <ContentWrapper>
      <Card
        content={`저희 햄찌가 많이 예민한\n아이라 걱정이 많았는데\n건강하게 보살펴주셔서\n덕분에 맘놓고\n여행 다녀올 수 있었네요\n감사합니다 ♥`}
      />
      <Card
        content={`케이지랑 사육환경이\n너무 잘 갖춰진 시터님이라 \n안심하고 맡겼어요!\n다음에도 맡길 일 있으면\n무조건 특별반 통해\n맡길거 같아요`}
      />
      <Card
        content={`벌써 두번째인데\n밑고 맏기게 되네요.\n항상  먼저 전화주시고\n저희 게코 잘 챙겨주셔서 \n감사합니다.`}
      />
    </ContentWrapper>
  </Container>
);
export default ReviewSection;
