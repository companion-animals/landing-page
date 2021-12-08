import styled from "styled-components";

import ChipAccordion from "src/components/accordion/ChipAccordion";
import { ExtraBold40, ExtraBold36 } from "src/components/text/Typographies";

const ExplanationSection = () => (
  <Container>
    <MobileTitle>{`맞춤 서비스로\n돌봄 만족도가 높아요`}</MobileTitle>
    <ContentWrapper>
      <Title>맞춤 서비스로 돌봄 만족도가 높아요</Title>
      <ChipWrapper>
        <Chip
          open
          title="특수동물 전문 돌봄 서비스"
          content={`특수동물 전문 돌봄 서비스이기에\n개별 종 특성에 맞는 돌봄이 가능해요.`}
        />
        <Chip
          open
          title="추가 서비스 요청 가능"
          content={`맡기는 동물의 특성에 따라\n추가 서비스 요청이 가능해요.\n(비용 별도 청구)`}
        />
        <ChipAccordion
          open
          title="우리동네 근처 펫시터 매칭"
          content={`맡기기 편한 우리동네 근처의 \n펫시터가 매칭돼요.`}
        />
      </ChipWrapper>
    </ContentWrapper>
  </Container>
);

export default ExplanationSection;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 90px;
  padding-bottom: 70px;
  text-align: center;
  background-color: #fafafa;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 70px;
    padding-bottom: 50px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(ExtraBold40)`
  white-space: pre-line;
  margin-bottom: 25px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const MobileTitle = styled(ExtraBold36)`
  display: none;

  @media screen and (max-width: 900px) {
    display: block;
    margin-bottom: 50px;
    white-space: pre-line;
  }
`;

const ChipWrapper = styled.div`
  display: flex;
  margin-top: 30px;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    margin-top: 0px;
  }
`;

const Chip = styled(ChipAccordion)`
  margin-right: 20px;

  @media screen and (max-width: 900px) {
    margin-right: 0px;
  }
`;
