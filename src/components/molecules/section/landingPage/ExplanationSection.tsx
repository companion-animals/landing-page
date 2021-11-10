import styled from "styled-components";

import { ExtraBold56, Medium38 } from "src/components/atoms/text/Typographies";
import images from "src/images";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 140px;
  padding-bottom: 154px;
  text-align: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RabbitImage = styled.img.attrs({ src: images.rabbitBG })`
  width: 826px;
  height: 437px;
  margin-right: 66px;
`;

const Title = styled(ExtraBold56)`
  white-space: pre-line;
  margin-bottom: 40px;
`;

const BorderChip = styled.div`
  width: 456px;
  padding: 22px 0px;
  border: 2px solid #7065e7;
  background-color: #fafafa;
  border-radius: 60px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const BackgroundChip = styled(BorderChip)`
  border: none;
  background-color: #d4d0f5;
`;

const Text = styled(Medium38)`
  color: #ffffff;
`;

const ColoredText = styled(Text)`
  color: #7065e7;
`;

const DarkBackgroundChip = styled(BackgroundChip)`
  background-color: #7065e7;
`;

const ExplanationSection = () => (
  <Container>
    <RabbitImage />
    <ContentWrapper>
      <Title>{`맞춤 서비스로\n돌봄 만족도가 높아요`}</Title>
      <BorderChip>
        <ColoredText>특수동물 전문 돌봄 서비스</ColoredText>
      </BorderChip>
      <BackgroundChip>
        <ColoredText>추가 서비스 요청 가능</ColoredText>
      </BackgroundChip>
      <DarkBackgroundChip>
        <Text>우리동네 근처 펫시터 매칭</Text>
      </DarkBackgroundChip>
    </ContentWrapper>
  </Container>
);

export default ExplanationSection;
