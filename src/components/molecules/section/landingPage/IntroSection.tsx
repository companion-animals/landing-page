import styled, { keyframes } from "styled-components";

import XEIcon from "src/components/atoms/icon/XEIcon";
import {
  ExtraBold22,
  ExtraBold36,
  ExtraBold48,
} from "src/components/atoms/text/Typographies";
import images from "src/images";

const FLOAT_KEYFRAME = keyframes`
	0% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
	50% {
		box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2);
		transform: translatey(-5px);
	}
	100% {
		box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6);
		transform: translatey(0px);
	}
`;

const APPLY_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLScq8tQoJ_dptmVfMGKTP-WT1esNBc5s0BgcvS8We-VsC8kfTg/viewform?usp=sf_link";

const Container = styled.div`
  width: 100%;
  background-color: #e4e9f5;
  display: flex;
  justify-content: center;
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
  margin-top: 190px;
  display: inline;
  white-space: pre-line;
  margin-left: 20px;

  @media screen and (max-width: 750px) {
    margin-top: 80px;
  }
`;

const SectionTitle = styled(ExtraBold48)`
  display: inline;

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
  color: #7065e7;
  display: inline;

  @media screen and (max-width: 750px) {
    font-size: 36px;
    line-height: 46px;
  }
`;

const ParrotImage = styled.img.attrs({ src: images.parrot })`
  width: 370px;

  @media screen and (max-width: 750px) {
    width: 270px;
  }
`;

const SignUpButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.32);
  border-radius: 10px;
  margin-top: 50px;
  background-color: #6448bf;
  padding: 15px 30px;
  width: 210px;
  margin-top: 30px;
  transform: translatey(0px);
  animation: ${FLOAT_KEYFRAME} 6s ease-in-out infinite;

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

const MobileSignUpButton = styled(SignUpButton)`
  display: none;

  @media screen and (max-width: 750px) {
    display: flex;
    position: absolute;
    bottom: 50px;
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

const Link = styled.a`
  text-decoration: none;
`;

const IntroSection = () => (
  <Container>
    <Wrapper>
      <ContentWrapper>
        <ParrotImage />
        <TitleWrapper>
          <ColoredTitle>우리동네 특별반</ColoredTitle>
          <SectionTitle>{`이\n특별한 아이들을 돌봐드려요`}</SectionTitle>
          <MobileTitle>{`이\n특별한 아이들을\n돌봐드려요`}</MobileTitle>
          <Link target="_blank" rel="noreferrer" href={APPLY_LINK}>
            <SignUpButton>
              <SignUpButtonText>지금 신청하기</SignUpButtonText>
              <RightAngleIcon />
            </SignUpButton>
          </Link>
        </TitleWrapper>
        <Link target="_blank" rel="noreferrer" href={APPLY_LINK}>
          <MobileSignUpButton>
            <SignUpButtonText>지금 신청하기</SignUpButtonText>
            <RightAngleIcon />
          </MobileSignUpButton>
        </Link>
      </ContentWrapper>
    </Wrapper>
  </Container>
);

export default IntroSection;
