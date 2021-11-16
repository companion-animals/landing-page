import styled from "styled-components";

import {
  ExtraBold40,
  ExtraBold36,
} from "src/components/atoms/text/Typographies";
import ChipAccordion from "src/components/molecules/accordion/ChipAccordion";
import images from "src/images";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 90px;
  padding-bottom: 50px;
  text-align: center;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 70px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RabbitImage = styled.img.attrs({ src: images.rabbitBG })`
  width: 626px;
  height: 340px;
  margin-right: 66px;

  @media screen and (max-width: 750px) {
    width: 330px;
    height: 187px;
    margin-bottom: 60px;
  }
`;

const Title = styled(ExtraBold40)`
  white-space: pre-line;
  margin-bottom: 25px;

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

const MobileTitle = styled(ExtraBold36)`
  display: none;

  @media screen and (max-width: 750px) {
    display: block;
    margin-bottom: 70px;
    white-space: pre-line;
  }
`;

const ExplanationSection = () => (
  <Container>
    <MobileTitle>{`맞춤 서비스로\n돌봄 만족도가 높아요`}</MobileTitle>
    <RabbitImage />
    <ContentWrapper>
      <Title>{`맞춤 서비스로\n돌봄 만족도가 높아요`}</Title>
      <ChipAccordion
        title="특수동물 전문 돌봄 서비스"
        content={`특수동물 전문 돌봄 서비스이기에\n개별 종 특성에 맞는 돌봄이 가능해요.`}
      />
      <ChipAccordion
        title="추가 서비스 요청 가능"
        content={`맡기는 동물의 특성에 따라\n추가 서비스 요청이 가능해요.\n(비용 별도 청구)`}
      />
      <ChipAccordion
        title="우리동네 근처 펫시터 매칭"
        content={`맡기기 편한 우리동네 근처의 \n펫시터가 매칭돼요.`}
      />
    </ContentWrapper>
  </Container>
);

export default ExplanationSection;
