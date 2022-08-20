import { useCallback } from "react";

import NextLink from "next/link";

import styled from "styled-components";

import XEIcon from "src/components/icon/XEIcon";
import { ExtraBold16 } from "src/components/text/Typographies";
import { OK } from "src/constatnts/networkStatus";
import { logout } from "src/controller/authController";
import useLogin from "src/hooks/useLogin";
import images from "src/images";

const APPLY_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSdA279z1g6td4dr9nV-nf55BfQe3FBnwJrDBzKcbCyFnd8cgQ/viewform?usp=sf_link";

const TopBar = () => {
  const isLogin = useLogin();
  const onLogout = useCallback(async () => {
    const { status } = await logout();

    if (status === OK) {
      window.location.href = "/";
    }
  }, []);

  return (
    <Container>
      <Wrapper>
        <TextLogo />
        <ButtonContainer>
          {isLogin ? (
            <ApplyButton onClick={onLogout}>
              <ApplyButtonText>로그아웃</ApplyButtonText>
            </ApplyButton>
          ) : (
            <NextLink href="/login">
              <ApplyButton>
                <ApplyButtonText>로그인</ApplyButtonText>
              </ApplyButton>
            </NextLink>
          )}
          <Link
            id="sitterApplyButton"
            target="_blank"
            rel="noreferrer"
            href={APPLY_LINK}
          >
            <ApplyButton>
              <ApplyButtonText>펫시터 지원</ApplyButtonText>
              <RightAngleIcon />
            </ApplyButton>
          </Link>
        </ButtonContainer>
      </Wrapper>
    </Container>
  );
};

export default TopBar;

const Container = styled.header`
  width: 100%;
  background-color: #ffffff;
  padding: 26px 50px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 900px) {
    padding: 16px 30px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1080px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ApplyButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 3px 6px;
  border: 3px solid #79cea7;
  margin-left: 8px;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    padding: 2px 4px;
    border-width: 1px;
    border-radius: 7px;
  }
`;

const RightAngleIcon = styled(XEIcon).attrs({ type: "xi-angle-right" })`
  color: #79cea7;
  font-weight: 800;
  font-size: 14px;
  margin-left: 5px;

  @media screen and (max-width: 900px) {
    font-size: 10px;
    margin-left: 2px;
  }
`;

const ApplyButtonText = styled(ExtraBold16)`
  color: #79cea7;
  margin-top: 0px;
  margin-left: 3px;

  @media screen and (max-width: 900px) {
    font-size: 12px;
    margin-left: 3px;
  }
`;

const Link = styled.a`
  text-decoration: none;
`;

const TextLogo = styled.img.attrs({ src: images.textLogo })`
  width: 180px;

  @media screen and (max-width: 900px) {
    width: 120px;
  }
`;
