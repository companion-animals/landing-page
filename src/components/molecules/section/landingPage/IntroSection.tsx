import { useState, useEffect } from "react";

import styled from "styled-components";

import XEIcon from "src/components/atoms/icon/XEIcon";
import {
  ExtraBold22,
  SemiBold36,
  ExtraBold48,
  SemiBold48,
} from "src/components/atoms/text/Typographies";
import images from "src/images";

const APPLY_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLScq8tQoJ_dptmVfMGKTP-WT1esNBc5s0BgcvS8We-VsC8kfTg/viewform?usp=sf_link";

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 124px;
  padding-bottom: 140px;

  @media screen and (max-width: 900px) {
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

  @media screen and (max-width: 900px) {
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

  @media screen and (max-width: 900px) {
    margin-top: 40px;
    margin-left: 0px;
    margin-right: 0px;
  }
`;

const SectionTitle = styled(SemiBold48)`
  display: inline;
  line-height: 60px;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const MobileTitle = styled(SemiBold36)`
  display: none;

  @media screen and (max-width: 900px) {
    display: inline;
  }
`;

const ColoredTitle = styled(ExtraBold48)`
  display: inline;

  @media screen and (max-width: 900px) {
    font-size: 36px;
    line-height: 46px;
  }
`;

const Link = styled.a`
  text-decoration: none;
  cursor: default;
  display: contents;
`;

const SignUpButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  margin-top: 50px;
  background-color: #79cea7;
  padding: 15px 30px;
  width: 210px;
  margin-top: 30px;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const MobileSignUpButton = styled(SignUpButton)<{ width: number }>`
  display: none;

  @media screen and (max-width: 900px) {
    display: flex;
    position: fixed;
    bottom: 30px;
    padding: 10px 20px;
    width: ${({ width }) => width - 80}px;
    z-index: 2;
    cursor: pointer;
  }
`;

const RightAngleIcon = styled(XEIcon).attrs({ type: "xi-angle-right" })`
  color: #ffffff;
  font-weight: 800;
  font-size: 18px;

  @media screen and (max-width: 900px) {
    font-size: 15px;
  }
`;

const SignUpButtonText = styled(ExtraBold22)`
  color: #ffffff;

  @media screen and (max-width: 900px) {
    font-size: 18px;
  }
`;

const Logo = styled.img.attrs({ src: images.logo })`
  width: 300px;
  height: 300px;
  border-radius: 80px;

  @media screen and (max-width: 900px) {
    width: 220px;
    height: 220px;
  }
`;

const IntroSection = () => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    window.addEventListener("resize", () => {
      const fullWidth = document.body.clientWidth;
      setWidth(fullWidth);
    });
  }, []);

  useEffect(() => {
    const fullWidth = document.body.clientWidth;
    if (!width) {
      setWidth(fullWidth);
    }
  }, [width]);

  return (
    <Container>
      <Wrapper>
        <ContentWrapper>
          <TitleWrapper>
            <ColoredTitle>우리동네 특별반</ColoredTitle>
            <SectionTitle>{`이\n특별한 아이들을 돌봐드려요`}</SectionTitle>
            <MobileTitle>{`이\n특별한 아이들을\n돌봐드려요`}</MobileTitle>
            <Link id="topFindHotelButton" href={APPLY_LINK} target="_blank">
              <SignUpButton>
                <SignUpButtonText>지금 신청하기</SignUpButtonText>
                <RightAngleIcon />
              </SignUpButton>
            </Link>
          </TitleWrapper>
          <Link id="floatingFindHotelButton" href={APPLY_LINK} target="_blank">
            <MobileSignUpButton width={width}>
              <SignUpButtonText>지금 신청하기</SignUpButtonText>
              <RightAngleIcon />
            </MobileSignUpButton>
          </Link>
          <Logo />
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
};

export default IntroSection;
