import styled from "styled-components";

import { ExtraBold44, Light38 } from "src/components/atoms/text/Typographies";
import useScrollFadeInUp from "src/hooks/useScrollFadeInUp";
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
    padding-top: 60px;
  }
`;

const AnimalImage = styled.img.attrs({ src: images.animals })`
  height: 500px;

  @media screen and (max-width: 750px) {
    height: 400px;
  }
`;

const TitleContainer = styled.div`
  white-space: pre-line;
  margin-right: 142px;
  margin-top: 70px;

  @media screen and (max-width: 750px) {
    margin-right: 0px;
    margin-bottom: 70px;
    margin-top: 0px;
  }
`;

const LightTitle = styled(Light38)`
  color: #252525;
  margin-bottom: 15px;

  @media screen and (max-width: 750px) {
    font-size: 24px;
    margin-bottom: 0px;
  }
`;

const BoldTitle = styled(ExtraBold44)`
  @media screen and (max-width: 750px) {
    font-size: 30px;
  }
`;

const ColoredBoldTitle = styled(BoldTitle)`
  color: #7065e7;
`;

const TitleWrapper = styled.div``;

const SecondSection = () => {
  const lightTitleAnimatedItem = useScrollFadeInUp();
  const boldTitleAnimatedItem = useScrollFadeInUp(1000);

  return (
    <Container>
      <TitleContainer>
        <TitleWrapper {...lightTitleAnimatedItem}>
          <LightTitle>고양이말고.. 강아지말고..</LightTitle>
        </TitleWrapper>
        <TitleWrapper {...boldTitleAnimatedItem}>
          <ColoredBoldTitle>{`햄스터, 기니피그, 토끼\n도마뱀, 앵무새...`}</ColoredBoldTitle>
          <BoldTitle>돌봐줄 곳 어디 없을까요?</BoldTitle>
        </TitleWrapper>
      </TitleContainer>
      <AnimalImage />
    </Container>
  );
};

export default SecondSection;
