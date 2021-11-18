import styled from "styled-components";

import {
  Medium36,
  Bold42,
  Medium22,
} from "src/components/atoms/text/Typographies";
import useScrollFadeIn from "src/hooks/useScrollFadeIn";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 80px;

  @media screen and (max-width: 750px) {
    padding-top: 70px;
    padding-bottom: 60px;
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

const LeftWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-right: 320px;

  @media screen and (max-width: 750px) {
    margin-right: 50px;
  }
`;

const SecondLeftWrapper = styled(LeftWrapper)`
  margin-right: 430px;

  @media screen and (max-width: 750px) {
    margin-right: 50px;
  }
`;

const RightWrapper = styled(LeftWrapper)`
  margin-left: 400px;
  margin-right: 0px;

  @media screen and (max-width: 750px) {
    margin-left: 50px;
  }
`;

const MediumText = styled(Medium36)`
  white-space: pre-line;
  margin-bottom: 20px;
  margin-top: 70px;
  text-align: center;
  line-height: 57px;

  @media screen and (max-width: 750px) {
    font-size: 20px;
    margin-bottom: 5px;
    line-height: 35px;
    margin-top: 40px;
  }
`;

const BoldTitle = styled(Bold42)`
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

const BoldText = styled(Medium22)`
  white-space: pre-line;

  @media screen and (max-width: 750px) {
    font-size: 12px;
    line-height: normal;
    text-align: left;
  }
`;

const Icon = styled.span`
  font-size: 60px;
  margin-right: 30px;

  @media screen and (max-width: 750px) {
    font-size: 28px;
  }
`;

const LeftSpeechBubble = styled.div`
  width: 470px;
  height: 110px;
  position: relative;
  border-radius: 30px;
  padding: 20px 12px;
  display: flex;
  justify-content: center;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.32);
  align-items: center;
  border: 2px solid #79cea7;
  z-index: 2;
  margin-bottom: 30px;

  &:after {
    border-top: 20px solid #ffffff;
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    border-bottom: 0px solid transparent;
    content: "";
    position: absolute;
    top: 105px;
    left: 60px;
    z-index: 1;
  }

  @media screen and (max-width: 750px) {
    width: 280px;
    height: 80px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.32);
    border: 1px solid #79cea7;

    &:after {
      top: 70px;
    }
  }
`;

const RightSpeechBubble = styled(LeftSpeechBubble)`
  width: 430px;

  &:after {
    top: 105px;
    left: 330px;
    z-index: 1;
  }

  @media screen and (max-width: 750px) {
    width: 280px;
    height: 80px;

    &:after {
      top: 70px;
      left: 190px;
    }
  }
`;

const SecondLeftSpeechBubble = styled(LeftSpeechBubble)`
  width: 360px;

  @media screen and (max-width: 750px) {
    width: 270px;
    height: 80px;

    &:after {
      top: 70px;
    }
  }
`;

const SpeechBubbleSection = () => {
  const firstAnimatedItem = useScrollFadeIn({ direction: "right" });
  const secondAnimatedItem = useScrollFadeIn({ direction: "left", delay: 200 });
  const thirdAnimatedItem = useScrollFadeIn({ direction: "right", delay: 400 });
  const fourthAnimatedItem = useScrollFadeIn({ direction: "left", delay: 600 });

  return (
    <Container>
      <ContentContainer>
        <LeftWrapper {...firstAnimatedItem}>
          <LeftSpeechBubble>
            <Icon>🤔</Icon>
            <BoldText>
              {`명절동안 집에 내려가는데\n고슴도치를 어디에 맡겨야할지 고민돼요`}
            </BoldText>
          </LeftSpeechBubble>
        </LeftWrapper>
        <RightWrapper {...secondAnimatedItem}>
          <RightSpeechBubble>
            <Icon>😧</Icon>
            <BoldText>{`앵무새는 비행기 탑승이 안돼서\n같이 여행을 못간다는데 어떡하죠?`}</BoldText>
          </RightSpeechBubble>
        </RightWrapper>
        <SecondLeftWrapper {...thirdAnimatedItem}>
          <SecondLeftSpeechBubble>
            <Icon>😢</Icon>
            <BoldText>{`강아지 호텔에 문의했더니\n토끼는 못맡긴대요`}</BoldText>
          </SecondLeftSpeechBubble>
        </SecondLeftWrapper>
        <RightWrapper {...fourthAnimatedItem}>
          <RightSpeechBubble>
            <Icon>🥺</Icon>
            <BoldText>{`장기간 출장으로 집을 비우는데\n우리집 게코가 걱정돼요...`}</BoldText>
          </RightSpeechBubble>
        </RightWrapper>
        <MediumText>{`특별한 아이를 맡길 곳을 고민 중이었다면\n이제는 걱정하지 마세요.`}</MediumText>
        <ExtraBoldTitle>
          {`우리동네 특별반이\n안전하게 돌봐드릴게요!`}
        </ExtraBoldTitle>
      </ContentContainer>
    </Container>
  );
};

export default SpeechBubbleSection;
