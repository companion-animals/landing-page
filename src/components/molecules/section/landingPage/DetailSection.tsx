import styled from "styled-components";

import XEIcon from "src/components/atoms/icon/XEIcon";
import {
  ExtraBold56,
  ExtraBold68,
  ExtraBold38,
  Light38,
} from "src/components/atoms/text/Typographies";
import images from "src/images";

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
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 58px;
`;

const Number = styled(ExtraBold68)`
  color: #7065e7;
`;

const ExampleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 20px;
`;

const DetailtWrapper = styled.div`
  display: inline;
`;

const Detail = styled(Light38)`
  color: #6c6c6c;
  display: inline;
`;

const BoldDetail = styled(ExtraBold38)`
  color: #252525;
  display: inline;
`;

const Example = styled(Detail)`
  display: block;
  color: #8d8d8d;
`;

const DetailContainer = styled.div`
  display: inline;
  margin-left: 20px;
`;

const DetailSection = () => (
  <Container>
    <Title>{`검증된 특수동물 전문 펫시터니까\n믿을 수 있어요.`}</Title>
    <Wrapper>
      <Number>1.</Number>
      <ExampleContainer>
        <DetailtWrapper>
          <Detail>해당 반려동물 종류</Detail>
          <BoldDetail> 키워본 경험 1년 이상</BoldDetail>
        </DetailtWrapper>
        <Example>(ex- 게코의 경우 게코 1년이상 사육경험 필수)</Example>
      </ExampleContainer>
    </Wrapper>
    <Wrapper>
      <Number>2.</Number>
      <DetailContainer>
        <Detail>자격 요건 확인 및</Detail>
        <BoldDetail> 신원 확인 완료</BoldDetail>
      </DetailContainer>
    </Wrapper>
    <Wrapper>
      <Number>3.</Number>
      <DetailContainer>
        <Detail>최대 4단계에 걸친</Detail>
        <BoldDetail> 환경 및 인성 검증</BoldDetail>
      </DetailContainer>
    </Wrapper>
  </Container>
);

export default DetailSection;
