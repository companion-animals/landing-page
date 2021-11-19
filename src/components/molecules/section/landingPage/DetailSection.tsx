import styled from "styled-components";

import {
  ExtraBold44,
  ExtraBold36,
  ExtraBold32,
  SemiBold28,
  Light28,
  Light20,
} from "src/components/atoms/text/Typographies";
import useScrollFadeIn from "src/hooks/useScrollFadeIn";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-top: 110px;
  padding-bottom: 20px;
  background-color: #fafafa;

  @media screen and (max-width: 900px) {
    padding-top: 80px;
  }
`;

const SectionTitle = styled(ExtraBold44)`
  white-space: pre-line;
  margin-bottom: 50px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;
`;

const Number = styled(ExtraBold36)`
  color: #79cea7;

  @media screen and (max-width: 900px) {
    font-size: 26px;
  }
`;

const DetailLight = styled(Light28)`
  color: #252525;
  display: inline;
  white-space: pre-line;
`;

const DetailSemiBold = styled(SemiBold28)`
  color: #000000;
  display: inline;
  white-space: pre-line;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const BoldDetail = styled(ExtraBold36)`
  color: #79cea7;
  margin-bottom: 15px;

  @media screen and (max-width: 900px) {
    font-size: 26px;
    line-height: normal;
    margin-bottom: 10px;
  }
`;

const MobileText = styled(Light20)`
  display: none;

  @media screen and (max-width: 900px) {
    display: flex;
    white-space: pre-line;
    margin-top: 0px;
    line-height: normal;
  }
`;

const MobileTitle = styled(ExtraBold32)`
  display: none;

  @media screen and (max-width: 900px) {
    display: flex;
    white-space: pre-line;
    margin-bottom: 50px;
  }
`;

const MobileWrapper = styled.div`
  @media screen and (max-width: 900px) {
    display: flex;
    justify-content: center;
  }
`;
const DetailSection = () => {
  const firstAnimatedItems = useScrollFadeIn({ direction: "up" });
  const secondAnimatedItems = useScrollFadeIn({ direction: "up" });
  const thirdAnimatedItems = useScrollFadeIn({ direction: "up" });
  return (
    <Container>
      <MobileTitle>{`검증된\n특수동물 전문 펫시터니까\n믿을 수 있어요.`}</MobileTitle>
      <SectionTitle>{`검증된 특수동물 전문 펫시터니까\n믿을 수 있어요.`}</SectionTitle>
      <Wrapper {...firstAnimatedItems}>
        <Number>1.</Number>
        <BoldDetail>풍부한 반려경험 보유</BoldDetail>
        <DetailSemiBold>
          최소 2년 이상 해당 특수동물 반려경험
          <DetailLight>{`이 있는\n펫시터만을 매칭해드려요.`}</DetailLight>
        </DetailSemiBold>
        <MobileWrapper>
          <MobileText>{`최소 2년 이상 해당 특수동물\n반려경험 필수`}</MobileText>
        </MobileWrapper>
      </Wrapper>

      <Wrapper {...secondAnimatedItems}>
        <Number>2.</Number>
        <BoldDetail>자격요건 및 신원확인 완료</BoldDetail>
        <DetailSemiBold>
          <DetailLight>{`최대 4단계에 걸쳐 특수동물 돌봄에 적합한\n`}</DetailLight>
          인성과 환경을 갖춘 펫시터만을 선정<DetailLight>해요.</DetailLight>
        </DetailSemiBold>
        <MobileWrapper>
          <MobileText>{`최대 4단계에 결친\n환경 & 인성 검증`}</MobileText>
        </MobileWrapper>
      </Wrapper>

      <Wrapper {...thirdAnimatedItems}>
        <Number>3.</Number>
        <BoldDetail>안심 서비스 지원</BoldDetail>
        <DetailSemiBold>
          <DetailLight>{`예상치 못한 사건 `}</DetailLight>
          {`사고 발생시 즉각 대응이 가능한\n특수동물 전문 안심 서비스`}
          <DetailLight>를 지원해드려요.</DetailLight>
        </DetailSemiBold>
        <MobileWrapper>
          <MobileText>{`사고 발생시 즉각 대응 가능한\n특수동물 전문 안심서비스 지원`}</MobileText>
        </MobileWrapper>
      </Wrapper>
    </Container>
  );
};

export default DetailSection;
