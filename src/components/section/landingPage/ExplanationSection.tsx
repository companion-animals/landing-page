import styled from "styled-components";

import ChipAccordion from "src/components/accordion/ChipAccordion";
import {
  ExtraBold40,
  Medium40,
  Regular20,
  Bold20,
} from "src/components/text/Typographies";

const ExplanationSection = () => (
  <Container>
    <ContentWrapper>
      <MediumText>특별반 펫시터/펫호텔은</MediumText>
      <ExtraBoldText>왜 만족도가 높은가요?</ExtraBoldText>
      <ChipWrapper>
        <Chip open title="특수동물 전문 돌봄 서비스">
          <BoldText>특수동물 전문 펫시터/펫호텔이니까</BoldText>
          <RegularText>개별 종 특성에 맞는 돌봄이 가능해요.</RegularText>
        </Chip>
        <Chip open title="추가 서비스 요청 가능">
          <BoldText>맡기는 동물의 특성에 따라</BoldText>
          <RegularText>
            {`추가 서비스 요청이 가능해요.\n(비용 별도 청구)`}
          </RegularText>
        </Chip>
        <ChipAccordion open title="우리동네 근처 펫시터 매칭">
          <BoldText>우리동네 펫시터/펫호텔 매칭으로</BoldText>
          <RegularText>맡기기 편리해요</RegularText>
        </ChipAccordion>
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

const MediumText = styled(Medium40)`
  @media screen and (max-width: 900px) {
    font-size: 34px;
  }
`;

const ExtraBoldText = styled(ExtraBold40)`
  margin-bottom: 25px;

  @media screen and (max-width: 900px) {
    font-size: 34px;
    margin-bottom: 50px;
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

const RegularText = styled(Regular20)`
  white-space: pre-line;

  @media screen and (max-width: 900px) {
    font-size: 16px;
  }
`;

const BoldText = styled(Bold20)`
  white-space: pre-line;

  @media screen and (max-width: 900px) {
    font-size: 16px;
  }
`;
