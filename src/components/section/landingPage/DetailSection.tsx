import styled from "styled-components";

import {
  ExtraBold44,
  ExtraBold36,
  Medium28,
  ExtraBold28,
  Medium44,
} from "src/components/text/Typographies";
import useScrollFadeIn from "src/hooks/useScrollFadeIn";

const DetailSection = () => {
  const { firstAnimatedItems, secondAnimatedItems, thirdAnimatedItems } =
    useDetailSection();

  return (
    <Container>
      <MediumTitle>특별반 펫시터들은</MediumTitle>
      <SectionTitle>어떤점이 다른가요?</SectionTitle>
      <Wrapper {...firstAnimatedItems}>
        <Number>1.</Number>
        <BoldDetail>특수동물 반려경험 보유</BoldDetail>
        <DetailExtraBold>맡기려는 특수동물을 반려해본</DetailExtraBold>
        <DetailMedium>경험이 있는 펫시터만을 매칭해드려요.</DetailMedium>
      </Wrapper>

      <Wrapper {...secondAnimatedItems}>
        <Number>2.</Number>
        <BoldDetail>신원 확인 완료</BoldDetail>
        <DetailExtraBold>증빙서류로 신원 확인된</DetailExtraBold>
        <DetailMedium>펫시터만을 소개해드려요.</DetailMedium>
      </Wrapper>

      <Wrapper {...thirdAnimatedItems}>
        <Number>3.</Number>
        <BoldDetail>후기 확인 가능</BoldDetail>
        <DetailExtraBold>펫시터별로 후기를 읽어보고</DetailExtraBold>
        <DetailMedium>결정할 수 있어요.</DetailMedium>
      </Wrapper>
    </Container>
  );
};

export default DetailSection;

const useDetailSection = () => {
  const firstAnimatedItems = useScrollFadeIn({ direction: "up" });
  const secondAnimatedItems = useScrollFadeIn({ direction: "up" });
  const thirdAnimatedItems = useScrollFadeIn({ direction: "up" });

  return {
    firstAnimatedItems,
    secondAnimatedItems,
    thirdAnimatedItems,
  };
};

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

const MediumTitle = styled(Medium44)`
  @media screen and (max-width: 900px) {
    font-size: 32px;
  }
`;

const SectionTitle = styled(ExtraBold44)`
  margin-bottom: 50px;

  @media screen and (max-width: 900px) {
    font-size: 32px;
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

const DetailMedium = styled(Medium28)`
  color: #252525;

  @media screen and (max-width: 900px) {
    font-size: 20px;
    line-height: normal;
  }
`;

const DetailExtraBold = styled(ExtraBold28)`
  color: #000000;
  display: inline;
  white-space: pre-line;

  @media screen and (max-width: 900px) {
    font-size: 20px;
  }
`;

const BoldDetail = styled(ExtraBold36)`
  color: #79cea7;
  margin-bottom: 20px;

  @media screen and (max-width: 900px) {
    font-size: 26px;
    line-height: normal;
    margin-bottom: 10px;
  }
`;
