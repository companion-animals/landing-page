import styled from "styled-components";

import {
  ExtraBold56,
  ExtraBold48,
  ExtraBold68,
  SemiBold38,
  Light38,
  Light30,
} from "src/components/atoms/text/Typographies";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 110px;
  padding-bottom: 20px;
`;

const Title = styled(ExtraBold56)`
  white-space: pre-line;
  margin-bottom: 78px;

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 58px;
`;

const Number = styled(ExtraBold68)`
  color: #7065e7;
`;

const DetailLight = styled(Light38)`
  color: #252525;
  display: inline;
  white-space: pre-line;
`;

const DetailSemiBold = styled(SemiBold38)`
  color: #000000;
  display: inline;
  white-space: pre-line;
  margin-top: 37px;

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

const BoldDetail = styled(ExtraBold48)`
  color: #7065e7;
`;

const MobileText = styled(Light30)`
  display: none;

  @media screen and (max-width: 750px) {
    display: block;
    white-space: pre-line;
    margin-top: 35px;
  }
`;

const MobileTitle = styled(ExtraBold56)`
  display: none;

  @media screen and (max-width: 750px) {
    display: block;
    white-space: pre-line;
    margin-bottom: 140px;
  }
`;

const DetailSection = () => (
  <Container>
    <MobileTitle>{`검증된\n특수동물 전문 펫시터니까\n믿을 수 있어요.`}</MobileTitle>
    <Title>{`검증된 특수동물 전문 펫시터니까\n믿을 수 있어요.`}</Title>
    <Wrapper>
      <Number>1.</Number>
      <BoldDetail>풍부한 반려경험 보유</BoldDetail>
      <DetailSemiBold>
        최소 2년 이상 해당 특수동물 반려경험
        <DetailLight>{`이 있는\n펫시터만을 매칭해드려요.`}</DetailLight>
      </DetailSemiBold>
      <MobileText>{`최소 2년 이상 해당 특수동물
       반려경험 필수`}</MobileText>
    </Wrapper>
    <Wrapper>
      <Number>2.</Number>
      <BoldDetail>자격요건 및 신원확인 완료</BoldDetail>
      <DetailSemiBold>
        <DetailLight>{`최대 4단계에 걸쳐 특수동물 돌봄에 적합한\n`}</DetailLight>
        인성과 환경을 갖춘 펫시터만을 선정<DetailLight>해요.</DetailLight>
      </DetailSemiBold>
      <MobileText>{`최대 4단계에 결친
      환경 & 인성 검증`}</MobileText>
    </Wrapper>
    <Wrapper>
      <Number>3.</Number>
      <BoldDetail>안심 서비스 지원</BoldDetail>
      <DetailSemiBold>
        <DetailLight>{`예상치 못한 사건 `}</DetailLight>
        {`사고 발생시 즉각 대응이 가능한\n특수동물 전문 안심 서비스`}
        <DetailLight>를 지원해드려요.</DetailLight>
      </DetailSemiBold>
      <MobileText>{`사고 발생시 즉각 대응 가능한 
      특수동물 전문 안심서비스 지원`}</MobileText>
    </Wrapper>
  </Container>
);

export default DetailSection;
