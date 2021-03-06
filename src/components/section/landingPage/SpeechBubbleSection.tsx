import styled from "styled-components";

import { Bold22, Bold46, Medium22 } from "src/components/text/Typographies";
import useScrollFadeIn from "src/hooks/useScrollFadeIn";

const SpeechBubbleSection = () => {
  const {
    firstAnimatedItem,
    secondAnimatedItem,
    thirdAnimatedItem,
    fourthAnimatedItem,
  } = useSpeechBubbleSection();

  return (
    <Container>
      <ContentContainer>
        <LeftWrapper {...firstAnimatedItem}>
          <LeftSpeechBubble>
            <Icon>๐ค</Icon>
            <MediumText>
              {`๋ช์ ๋์ ์ง์ ๋ด๋ ค๊ฐ๋๋ฐ\n`}
              <BoldText>๊ณ ์ด๋์น๋ฅผ ์ด๋์ ๋งก๊ฒจ์ผํ ์ง</BoldText> ๊ณ ๋ฏผ๋ผ์
            </MediumText>
          </LeftSpeechBubble>
        </LeftWrapper>
        <RightWrapper {...secondAnimatedItem}>
          <RightSpeechBubble>
            <Icon>๐ง</Icon>
            <MediumText>
              <BoldText>์ต๋ฌด์๋ ๋นํ๊ธฐ ํ์น์ด ์๋ผ์</BoldText>
              {`\n๊ฐ์ด ์ฌํ์ ๋ชป๊ฐ๋ค๋๋ฐ ์ด๋กํ์ฃ ?`}
            </MediumText>
          </RightSpeechBubble>
        </RightWrapper>
        <SecondLeftWrapper {...thirdAnimatedItem}>
          <SecondLeftSpeechBubble>
            <Icon>๐ข</Icon>
            <MediumText>
              {`๊ฐ์์ง ํธํ์ ๋ฌธ์ํ๋๋\n`}
              <BoldText>ํ ๋ผ๋ ๋ชป๋งก๊ธด๋์</BoldText>
            </MediumText>
          </SecondLeftSpeechBubble>
        </SecondLeftWrapper>
        <RightWrapper {...fourthAnimatedItem}>
          <RightSpeechBubble>
            <Icon>๐ฅบ</Icon>
            <MediumText>
              {`์ฅ๊ธฐ๊ฐ ์ถ์ฅ์ผ๋ก ์ง์ ๋น์ฐ๋๋ฐ\n`}
              <BoldText>์ฐ๋ฆฌ์ง ๊ฒ์ฝ๊ฐ ๊ฑฑ์ ๋ผ์...</BoldText>
            </MediumText>
          </RightSpeechBubble>
        </RightWrapper>

        <BoldTitle>{`ํน๋ณํ ์์ด๋ฅผ\n๋งก๊ธธ ๊ณณ์ ๊ณ ๋ฏผ ์ค์ด์๋ค๋ฉด?`}</BoldTitle>
      </ContentContainer>
    </Container>
  );
};

export default SpeechBubbleSection;

const useSpeechBubbleSection = () => {
  const firstAnimatedItem = useScrollFadeIn({ direction: "right" });
  const secondAnimatedItem = useScrollFadeIn({ direction: "left", delay: 200 });
  const thirdAnimatedItem = useScrollFadeIn({ direction: "right", delay: 400 });
  const fourthAnimatedItem = useScrollFadeIn({ direction: "left", delay: 600 });

  return {
    firstAnimatedItem,
    secondAnimatedItem,
    thirdAnimatedItem,
    fourthAnimatedItem,
  };
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
  padding-bottom: 80px;

  @media screen and (max-width: 900px) {
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

  @media screen and (max-width: 900px) {
    margin-right: 50px;
  }
`;

const SecondLeftWrapper = styled(LeftWrapper)`
  margin-right: 430px;

  @media screen and (max-width: 900px) {
    margin-right: 100px;
  }
`;

const RightWrapper = styled(LeftWrapper)`
  margin-left: 400px;
  margin-right: 0px;

  @media screen and (max-width: 900px) {
    margin-left: 80px;
  }
`;

const BoldTitle = styled(Bold46)`
  white-space: pre-line;
  text-align: center;
  margin-top: 80px;

  @media screen and (max-width: 900px) {
    font-weight: 800;
    font-size: 28px;
    line-height: normal;
    margin-top: 50px;
  }
`;

const MediumText = styled(Medium22)`
  white-space: pre-line;

  @media screen and (max-width: 900px) {
    font-size: 12px;
    line-height: normal;
    text-align: left;
  }
`;

const BoldText = styled(Bold22)`
  white-space: pre-line;
  display: inline;

  @media screen and (max-width: 900px) {
    font-size: 12px;
    line-height: normal;
    text-align: left;
  }
`;

const Icon = styled.span`
  font-size: 60px;
  margin-right: 30px;

  @media screen and (max-width: 900px) {
    font-size: 28px;
    margin-right: 18px;
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
  border: 1px solid #79cea7;
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

  @media screen and (max-width: 900px) {
    width: 260px;
    height: 60px;
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.32);
    border: 1px solid #79cea7;
    border-radius: 16px;
    &:after {
      top: 50px;
      left: 30px;
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

  @media screen and (max-width: 900px) {
    width: 240px;
    height: 60px;

    &:after {
      top: 50px;
      left: 170px;
    }
  }
`;

const SecondLeftSpeechBubble = styled(LeftSpeechBubble)`
  width: 360px;

  @media screen and (max-width: 900px) {
    width: 210px;
    height: 60px;

    &:after {
      top: 50px;
    }
  }
`;
