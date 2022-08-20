import { useState, useEffect } from "react";

import NextLink from "next/link";

import styled from "styled-components";

import RightAngleButton from "src/components/button/roundBox/RightAngleButton";
import {
  SemiBold36,
  ExtraBold48,
  SemiBold48,
} from "src/components/text/Typographies";
import useLogin from "src/hooks/useLogin";
import images from "src/images";

const APPLY_LINK = "https://forms.gle/7kR9VK5CQhEcKznS9";

const IntroSection = () => {
  const { width } = useIntroSection();
  const isLogin = useLogin();

  return (
    <Container>
      <Wrapper>
        <ContentWrapper>
          <TitleWrapper>
            <ColoredTitle>우리동네 특별반</ColoredTitle>
            <SectionTitle>{`이\n특별한 아이들을 돌봐드려요`}</SectionTitle>
            <MobileTitle>{`이\n특별한 아이들을\n돌봐드려요`}</MobileTitle>
            {isLogin ? (
              <Link id="topFindHotelButton" href={APPLY_LINK} target="_blank">
                <RightAngleButton title="지금 신청하기" />
              </Link>
            ) : (
              <NextLink href="/login">
                <RightAngleButton title="로그인" />
              </NextLink>
            )}
          </TitleWrapper>
          <Link id="floatingFindHotelButton" href={APPLY_LINK} target="_blank">
            <MobileSignUpButton width={width} title="지금 신청하기" />
          </Link>
          <Illustration />
        </ContentWrapper>
      </Wrapper>
    </Container>
  );
};

export default IntroSection;

const useIntroSection = () => {
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

  return { width };
};

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

const MobileSignUpButton = styled(RightAngleButton)<{
  width: number;
}>`
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

const Illustration = styled.img.attrs({ src: images.illustration })`
  width: 450px;
  height: 300px;

  @media screen and (max-width: 900px) {
    width: 280px;
    height: 200px;
  }
`;
