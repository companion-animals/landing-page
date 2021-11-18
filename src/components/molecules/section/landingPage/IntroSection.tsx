import styled from "styled-components";

import XEIcon from "src/components/atoms/icon/XEIcon";
import {
  ExtraBold22,
  ExtraBold36,
  ExtraBold48,
  SemiBold48,
} from "src/components/atoms/text/Typographies";
import images from "src/images";
import { FLOAT_KEYFRAME } from "src/styles/animation";
import { openNewTab } from "src/utils/common";

const APPLY_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLScq8tQoJ_dptmVfMGKTP-WT1esNBc5s0BgcvS8We-VsC8kfTg/viewform?usp=sf_link";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 124px;
  padding-bottom: 140px;

  @media screen and (max-width: 750px) {
    padding-top: 80px;
    padding-bottom: 60px;
  }
`;

const Wrapper = styled.div`
  width: 1200px;
  position: relative;
`;

const ContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  @media screen and (max-width: 750px) {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
    margin-top: 0px;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 64px;
  display: inline;
  white-space: pre-line;
  margin-left: 20px;
  margin-top: 20px;

  @media screen and (max-width: 750px) {
    margin-top: 40px;
    margin-left: 0px;
    margin-right: 0px;
  }
`;

const SectionTitle = styled(SemiBold48)`
  display: inline;
  line-height: 60px;

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

const MobileTitle = styled(ExtraBold36)`
  display: none;

  @media screen and (max-width: 750px) {
    display: inline;
  }
`;

const ColoredTitle = styled(ExtraBold48)`
  display: inline;

  @media screen and (max-width: 750px) {
    font-size: 36px;
    line-height: 46px;
  }
`;

const SignUpButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.32);
  border-radius: 10px;
  margin-top: 50px;
  background-color: #79cea7;
  padding: 15px 30px;
  width: 210px;
  margin-top: 30px;
  transform: translatey(0px);
  animation: ${FLOAT_KEYFRAME} 5s ease-in-out infinite;

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

const MobileSignUpButton = styled(SignUpButton)`
  display: none;

  @media screen and (max-width: 750px) {
    display: flex;
    position: absolute;
    bottom: 0px;
    padding: 10px 20px;
    width: 160px;
    transform: translatey(0px);
    animation: ${FLOAT_KEYFRAME} 6s ease-in-out infinite;
  }
`;

const RightAngleIcon = styled(XEIcon).attrs({ type: "xi-angle-right" })`
  color: #ffffff;
  font-weight: 800;
  font-size: 18px;

  @media screen and (max-width: 750px) {
    font-size: 15px;
  }
`;

const SignUpButtonText = styled(ExtraBold22)`
  color: #ffffff;

  @media screen and (max-width: 750px) {
    font-size: 18px;
  }
`;

const Logo = styled.img.attrs({ src: images.logo })`
  width: 300px;
  height: 300px;
  border-radius: 80px;

  @media screen and (max-width: 750px) {
    width: 220px;
    height: 220px;
  }
`;

const IntroSection = () => {
  const openApplyLink = () => {
    openNewTab(APPLY_LINK);
  };

  return (
    <Container>
      <Wrapper>
        <ContentWrapper>
          <TitleWrapper>
            <ColoredTitle>우리동네 특별반</ColoredTitle>
            <SectionTitle>{`이\n특별한 아이들을 돌봐드려요`}</SectionTitle>
            <MobileTitle>{`이\n특별한 아이들을\n돌봐드려요`}</MobileTitle>
            <SignUpButton onClick={openApplyLink}>
              <SignUpButtonText>지금 신청하기</SignUpButtonText>
              <RightAngleIcon />
            </SignUpButton>
          </TitleWrapper>

          <MobileSignUpButton onClick={openApplyLink}>
            <SignUpButtonText>지금 신청하기</SignUpButtonText>
            <RightAngleIcon />
          </MobileSignUpButton>
          <Logo />
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
};

export default IntroSection;
