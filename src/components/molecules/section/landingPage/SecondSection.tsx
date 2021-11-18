import styled from "styled-components";

import { ExtraBold44, Light38 } from "src/components/atoms/text/Typographies";
import useScrollFadeIn from "src/hooks/useScrollFadeIn";
import images from "src/images";

const Container = styled.div`
  width: 100%;
  padding-top: 100px;
  padding-bottom: 80px;
  background-color: #fafafa;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 750px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-top: 60px;
  }
`;

const Wrapper = styled.div`
  max-width: 1180px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const TitleContainer = styled.div`
  white-space: pre-line;
  margin-left: 100px;
  margin-top: 97px;

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

const ImageContainer = styled.div`
  position: relative;
  width: 360px;
  height: 500px;
`;

const ImageWrapper = styled.div`
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const BirdWrapper = styled(ImageWrapper)`
  width: 140px;
  height: 140px;
  left: 80px;
`;

const ChameleonWrapper = styled(ImageWrapper)`
  width: 110px;
  height: 110px;
  right: 0px;
  top: 90px;
`;

const HamsterWrapper = styled(ImageWrapper)`
  width: 160px;
  height: 160px;
  top: 170px;
  left: 0px;
`;

const ParrotWrapper = styled(ImageWrapper)`
  width: 140px;
  height: 140px;
  right: 15px;
  top: 230px;
`;

const PigeonWrapper = styled(ImageWrapper)`
  width: 129px;
  height: 129px;
  top: 350px;
  left: 50px;
`;

const RabbitWrapper = styled(ImageWrapper)`
  width: 100px;
  height: 100px;
  right: 30px;
  top: 400px;
`;

const Bird = styled.img.attrs({ src: images.bird })`
  width: 110px;
`;
const Chameleon = styled.img.attrs({ src: images.chameleon })`
  width: 80px;
`;
const Hamster = styled.img.attrs({ src: images.hamster })`
  width: 120px;
`;
const Parrot = styled.img.attrs({ src: images.parrot })`
  width: 105px;
`;
const Pigeon = styled.img.attrs({ src: images.pigeon })`
  width: 100px;
`;
const Rabbit = styled.img.attrs({ src: images.rabbit })`
  width: 80px;
`;

const SecondSection = () => {
  const lightTitleAnimatedItem = useScrollFadeIn({ direction: "up" });
  const boldTitleAnimatedItem = useScrollFadeIn({
    delay: 200,
    direction: "up",
  });

  return (
    <Container>
      <Wrapper>
        <ImageContainer>
          <BirdWrapper>
            <Bird />
          </BirdWrapper>
          <ChameleonWrapper>
            <Chameleon />
          </ChameleonWrapper>
          <HamsterWrapper>
            <Hamster />
          </HamsterWrapper>
          <ParrotWrapper>
            <Parrot />
          </ParrotWrapper>
          <PigeonWrapper>
            <Pigeon />
          </PigeonWrapper>
          <RabbitWrapper>
            <Rabbit />
          </RabbitWrapper>
        </ImageContainer>
        <TitleContainer>
          <TitleWrapper {...lightTitleAnimatedItem}>
            <LightTitle>고양이말고, 강아지말고</LightTitle>
          </TitleWrapper>
          <TitleWrapper {...boldTitleAnimatedItem}>
            <ColoredBoldTitle>{}</ColoredBoldTitle>
            <BoldTitle>{`햄스터, 기니피그, 토끼\n도마뱀, 앵무새\n돌봐줄 곳 어디 없을까요?`}</BoldTitle>
          </TitleWrapper>
        </TitleContainer>
      </Wrapper>
    </Container>
  );
};

export default SecondSection;
