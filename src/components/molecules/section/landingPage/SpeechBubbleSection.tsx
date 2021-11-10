import styled from "styled-components";

import XEIcon from "src/components/atoms/icon/XEIcon";
import {
  Bold28,
  Bold56,
  Medium40,
  ExtraBold28,
} from "src/components/atoms/text/Typographies";
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

const RightAngleIcon = styled(XEIcon).attrs({ type: "xi-angle-right" })`
  color: #ffffff;
  font-weight: 800;
  font-size: 20px;
  margin-left: 5px;
`;

const ButtonWrapper = styled.div`
  max-width: 1550px;
  display: flex;
  justify-content: flex-end;
`;

const SignUpButton = styled.div`
  background-color: #6448bf;
  width: 255px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 38px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.32);
  border-radius: 10px;
  margin-bottom: 30px;

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

const SignUpButtonText = styled(ExtraBold28)`
  color: #ffffff;
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
    width: 509px;
    margin-left: 100px;
  }
`;

const LeftSpeechubble = styled.img.attrs({ src: images.leftSpeechBubble })`
  width: 581px;
`;

const SecondLeftSpeechubble = styled.img.attrs({
  src: images.leftSpeechBubble,
})`
  width: 468px;
  height: 180px;
  margin-right: 300px;

  @media screen and (max-width: 750px) {
    margin-left: 200px;
  }
`;

const MediumText = styled(Medium40)`
  margin-bottom: 36px;
  margin-top: 70px;

  @media screen and (max-width: 750px) {
    font-size: 34px;
    margin-bottom: 15px;
  }
`;

const BoldTitle = styled(Bold56)`
  display: inline;

  @media screen and (max-width: 750px) {
    font-size: 34px;
    font-weight: 500;
    line-height: normal;
    margin-bottom: 15px;
  }
`;

const ExtraBoldTitle = styled(BoldTitle)`
  @media screen and (max-width: 750px) {
    white-space: pre-line;
    font-weight: 800;
    font-size: 56px;
  }
`;

const ColoredTitle = styled(BoldTitle)`
  color: #7065e7;
  display: inline;

  @media screen and (max-width: 750px) {
    white-space: pre-line;
    font-weight: 800;
    font-size: 56px;
  }
`;

const BoldText = styled(Bold28)`
  position: absolute;
  white-space: pre-line;

  @media screen and (max-width: 750px) {
    font-size: 26px;
    margin-left: 200px;
    margin-right: 190px;
    text-align: left;
  }
`;

const RightBoldText = styled(BoldText)`
  top: 40px;
  right: 45px;
`;

const LeftBoldText = styled(BoldText)`
  top: 40px;
  left: 115px;
`;

const SecondRightText = styled(BoldText)`
  top: 40px;
  right: 60px;
`;

const SecondLeftText = styled(BoldText)`
  top: 40px;
  left: 130px;
`;

const Icon = styled.span`
  position: absolute;
  font-size: 60px;

  @media screen and (max-width: 750px) {
    margin-left: 200px;
  }
`;

const ConsiderICon = styled(Icon)`
  left: 40px;
  top: 30px;
`;

const EmbarassmentIcon = styled(Icon)`
  top: 30px;
  left: 340px;

  @media screen and (max-width: 750px) {
    left: 120px;
  }
`;

const TearsIcon = styled(Icon)`
  top: 30px;
  left: 40px;
`;

const SadIcon = styled(Icon)`
  top: 30px;
  left: 350px;

  @media screen and (max-width: 750px) {
    left: 130px;
  }
`;

const InlineWrapper = styled.div``;

const SpeechBubbleSection = () => (
  <Container>
    <ButtonWrapper>
      <SignUpButton>
        <SignUpButtonText>지금 신청하기</SignUpButtonText>
        <RightAngleIcon />
      </SignUpButton>
    </ButtonWrapper>
    <ContentContainer>
      <SpeechBubbleContainer>
        <SpeechBubbleWrapper>
          <LeftSpeechubble />
          <ConsiderICon>🤔</ConsiderICon>
          <LeftBoldText>
            {`명절동안 집에 내려가는데\n고슴도치를 어디에 맡겨야할지 고민돼요`}
          </LeftBoldText>
        </SpeechBubbleWrapper>
        <SpeechBubbleWrapper>
          <RightSpeechBubble />
          <EmbarassmentIcon>😧</EmbarassmentIcon>
          <RightBoldText>{`앵무새는 비행기 탑승이 안돼서\n같이 여행을 못간다는데 어떡하죠?`}</RightBoldText>
        </SpeechBubbleWrapper>
        <SpeechBubbleWrapper>
          <SecondLeftSpeechubble />
          <TearsIcon>😢</TearsIcon>
          <SecondLeftText>{`강아지 호텔에 문의했더니\n토끼는 못맡긴대요`}</SecondLeftText>
        </SpeechBubbleWrapper>
        <SpeechBubbleWrapper>
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

export default SpeechBubbleSection;
