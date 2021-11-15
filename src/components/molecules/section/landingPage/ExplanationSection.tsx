import styled from "styled-components";

import {
  ExtraBold40,
  Medium24,
  ExtraBold36,
} from "src/components/atoms/text/Typographies";
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

const BorderChip = styled.div`
  width: 300px;
  padding: 15px 0px;
  border: 2px solid #7065e7;
  background-color: #fafafa;
  border-radius: 60px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  @media screen and (max-width: 750px) {
    width: 280px;
  }
`;

const BackgroundChip = styled(BorderChip)`
  border: none;
  background-color: #7065e7;
`;

const Text = styled(Medium24)`
  color: #ffffff;

  @media screen and (max-width: 750px) {
    font-size: 20px;
  }
`;

const ColoredText = styled(Text)`
  color: #7065e7;
`;

const ExplanationSection = () => (
  <Container>
    <MobileTitle>{`맞춤 서비스로\n돌봄 만족도가 높아요`}</MobileTitle>
    <RabbitImage />
    <ContentWrapper>
      <Title>{`맞춤 서비스로\n돌봄 만족도가 높아요`}</Title>
      <BorderChip>
        <ColoredText>특수동물 전문 돌봄 서비스</ColoredText>
      </BorderChip>
      <BackgroundChip>
        <Text>추가 서비스 요청 가능</Text>
      </BackgroundChip>
      <BorderChip>
        <ColoredText>우리동네 근처 펫시터 매칭</ColoredText>
      </BorderChip>
    </ContentWrapper>
  </Container>
);

export default ExplanationSection;
