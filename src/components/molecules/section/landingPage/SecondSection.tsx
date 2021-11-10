import styled from "styled-components";

import { ExtraBold56, Light48 } from "src/components/atoms/text/Typographies";
import images from "src/images";

const Container = styled.div`
  width: 100%;
  max-width: 1180px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 130px;
  padding-bottom: 80px;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const AnimalImage = styled.img.attrs({ src: images.animals })`
  height: 564px;
`;

const TitleWrapper = styled.div`
  white-space: pre-line;
  margin-right: 142px;
  margin-top: 90px;

  @media screen and (max-width: 750px) {
    margin-right: 0px;
    margin-bottom: 130px;
    margin-top: 0px;
  }
`;

const LightTitle = styled(Light48)`
  color: #252525;
`;

const BoldTitle = styled(ExtraBold56)``;

const ColoredBoldTitle = styled(BoldTitle)`
  color: #7065e7;
`;

const SecondSection = () => (
  <Container>
    <TitleWrapper>
      <LightTitle>고양이말고.. 강아지말고..</LightTitle>
      <ColoredBoldTitle>{`햄스터, 기니피그, 토끼\n도마뱀, 앵무새...`}</ColoredBoldTitle>
      <BoldTitle>돌봐줄 곳 어디 없을까요?</BoldTitle>
    </TitleWrapper>
    <AnimalImage />
  </Container>
);

export default SecondSection;
