import styled from "styled-components";

import {
  Bold28,
  Bold44,
  Medium38,
  ExtraBold44,
  Light38,
} from "src/components/atoms/text/Typographies";
import useScrollFadeIn from "src/hooks/useScrollFadeIn";
import images from "src/images";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  padding-bottom: 80px;
  background-color: #e5e2f2;

  @media screen and (max-width: 750px) {
    padding-top: 80px;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SpeechBubbleContainer = styled.div``;

const SpeechBubbleWrapper = styled.div`
  position: relative;
`;

const RightSpeechBubble = styled.img.attrs({ src: images.rightSpeechBubble })`
  width: 530px;
  margin-left: 300px;

  @media screen and (max-width: 750px) {
    width: 320px;
    margin-left: 50px;
  }
`;

const LeftSpeechubble = styled.img.attrs({ src: images.leftSpeechBubble })`
  width: 581px;

  @media screen and (max-width: 750px) {
    width: 350px;
    margin-left: -20px;
  }
`;

const SecondLeftSpeechubble = styled.img.attrs({
  src: images.leftSpeechBubble,
})`
  width: 470px;
  height: 180px;
  margin-right: 300px;

  @media screen and (max-width: 750px) {
    width: 270px;
    height: 100px;
    margin-right: 100px;
  }
`;

const MediumText = styled(Medium38)`
  margin-bottom: 20px;
  margin-top: 70px;

  @media screen and (max-width: 750px) {
    font-size: 20px;
    margin-bottom: 5px;
  }
`;

const BoldTitle = styled(Bold44)`
  display: inline;

  @media screen and (max-width: 750px) {
    font-size: 20px;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 5px;
  }
`;

const ExtraBoldTitle = styled(BoldTitle)`
  @media screen and (max-width: 750px) {
    white-space: pre-line;
    font-weight: 800;
    font-size: 30px;
  }
`;

const ColoredTitle = styled(BoldTitle)`
  color: #7065e7;
  display: inline;

  @media screen and (max-width: 750px) {
    white-space: pre-line;
    font-weight: 800;
    font-size: 30px;
  }
`;

const BoldText = styled(Bold28)`
  position: absolute;
  white-space: pre-line;

  @media screen and (max-width: 750px) {
    font-size: 16px;
    line-height: normal;
    text-align: left;
  }
`;

const RightBoldText = styled(BoldText)`
  top: 40px;
  right: 45px;

  @media screen and (max-width: 750px) {
    right: 30px;
    top: 20px;
  }
`;

const LeftBoldText = styled(BoldText)`
  top: 40px;
  left: 115px;

  @media screen and (max-width: 750px) {
    left: 80px;
    top: 22px;
  }
`;

const SecondRightText = styled(BoldText)`
  top: 40px;
  right: 60px;

  @media screen and (max-width: 750px) {
    right: 40px;
    top: 20px;
  }
`;

const SecondLeftText = styled(BoldText)`
  top: 40px;
  left: 130px;

  @media screen and (max-width: 750px) {
    left: 80px;
    top: 17px;
  }
`;

const Icon = styled.span`
  position: absolute;
  font-size: 60px;

  @media screen and (max-width: 750px) {
    font-size: 36px;
  }
`;

const ConsiderICon = styled(Icon)`
  left: 40px;
  top: 30px;

  @media screen and (max-width: 750px) {
    left: 30px;
    top: 17px;
  }
`;

const EmbarassmentIcon = styled(Icon)`
  top: 30px;
  left: 340px;

  @media screen and (max-width: 750px) {
    left: 80px;
    top: 17px;
  }
`;

const TearsIcon = styled(Icon)`
  top: 30px;
  left: 40px;

  @media screen and (max-width: 750px) {
    left: 30px;
    top: 12px;
  }
`;

const SadIcon = styled(Icon)`
  top: 30px;
  left: 350px;

  @media screen and (max-width: 750px) {
    left: 90px;
    top: 17px;
  }
`;

const InlineWrapper = styled.div``;

const SpeechBubbleSection = () => {
  const firstAnimatedItem = useScrollFadeIn({ direction: "right" });
  const secondAnimatedItem = useScrollFadeIn({ direction: "left", delay: 200 });
  const thirdAnimatedItem = useScrollFadeIn({ direction: "right", delay: 400 });
  const fourthAnimatedItem = useScrollFadeIn({ direction: "left", delay: 600 });

  return (
    <Container>
      <ContentContainer>
        <SpeechBubbleContainer>
          <SpeechBubbleWrapper {...firstAnimatedItem}>
            <LeftSpeechubble />
            <ConsiderICon>🤔</ConsiderICon>
            <LeftBoldText>
              {`명절동안 집에 내려가는데\n고슴도치를 어디에 맡겨야할지 고민돼요`}
            </LeftBoldText>
          </SpeechBubbleWrapper>
          <SpeechBubbleWrapper {...secondAnimatedItem}>
            <RightSpeechBubble />
            <EmbarassmentIcon>😧</EmbarassmentIcon>
            <RightBoldText>{`앵무새는 비행기 탑승이 안돼서\n같이 여행을 못간다는데 어떡하죠?`}</RightBoldText>
          </SpeechBubbleWrapper>
          <SpeechBubbleWrapper {...thirdAnimatedItem}>
            <SecondLeftSpeechubble />
            <TearsIcon>😢</TearsIcon>
            <SecondLeftText>{`강아지 호텔에 문의했더니\n토끼는 못맡긴대요`}</SecondLeftText>
          </SpeechBubbleWrapper>
          <SpeechBubbleWrapper {...fourthAnimatedItem}>
            <RightSpeechBubble />
            <SadIcon>🥺</SadIcon>
            <SecondRightText>{`장기간 출장으로 집을 비우는데\n우리집 게코가 걱정돼요...`}</SecondRightText>
          </SpeechBubbleWrapper>
        </SpeechBubbleContainer>
        <MediumText>특별한 아이를 맡길 곳을 고민 중이었다면...</MediumText>
        <BoldTitle>이제는 걱정하지 마세요.</BoldTitle>
        <InlineWrapper>
          <ExtraBoldTitle>
            <ColoredTitle>우리동네 특별반</ColoredTitle>
            {`이\n안전하게 돌봐드릴게요!`}
          </ExtraBoldTitle>
        </InlineWrapper>
      </ContentContainer>
    </Container>
  );
};

export default SpeechBubbleSection;
