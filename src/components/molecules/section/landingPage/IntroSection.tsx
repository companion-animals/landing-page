import styled from "styled-components";

import XEIcon from "src/components/atoms/icon/XEIcon";
import {
  ExtraBold56,
  ExtraBold28,
} from "src/components/atoms/text/Typographies";
import images from "src/images";

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

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 230px;
  display: inline;
  white-space: pre-line;
  margin-left: 20px;

  @media screen and (max-width: 750px) {
    margin-top: 150px;
  }
`;

const SectionTitle = styled(ExtraBold56)`
  display: inline;

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

const MobileTitle = styled(SectionTitle)`
  display: none;

  @media screen and (max-width: 750px) {
    display: inline;
  }
`;

const ColoredTitle = styled(ExtraBold56)`
  color: #7065e7;
  display: inline;
`;

const ContentWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 750px) {
    flex-direction: column-reverse;
    align-items: center;
    text-align: center;
  }
`;

const ParrotImage = styled.img.attrs({ src: images.parrot })`
  width: 474px;
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
  padding-right: 38px;
  padding-left: 38px;
  width: 255px;
  margin-top: 45px;

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

const MobileSignUpButton = styled(SignUpButton)`
  display: none;

  @media screen and (max-width: 750px) {
    display: flex;
    position: absolute;
    bottom: 120px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`;

const ApplyButton = styled(SignUpButton)`
  position: absolute;
  right: 0px;
  padding-right: 26px;
  padding-left: 26px;
  background-color: #ffffff;

  @media screen and (max-width: 750px) {
    display: none;
  }
`;

const RightAngleIcon = styled(XEIcon).attrs({ type: "xi-angle-right" })`
  color: #ffffff;
  font-weight: 800;
  font-size: 20px;
  margin-left: 5px;
`;

const ApplyButtonText = styled(ExtraBold28)`
  color: #8d86eb;
`;

const SignUpButtonText = styled(ExtraBold28)`
  color: #ffffff;
`;

const ColoredAngleIcon = styled(RightAngleIcon)`
  color: #8d86eb;
`;

const IntroSection = () => (
  <Container>
    <Wrapper>
      <ApplyButton>
        <ApplyButtonText> 펫시터 지원하기</ApplyButtonText>
        <ColoredAngleIcon />
      </ApplyButton>
      <ContentWrapper>
        <ParrotImage />
        <TitleWrapper>
          <ColoredTitle>우리동네 특별반</ColoredTitle>
          <SectionTitle>{`이\n특별한 아이들을 돌봐드려요`}</SectionTitle>
          <MobileTitle>{`이\n특별한 아이들을\n돌봐드려요`}</MobileTitle>
          <SignUpButton>
            <SignUpButtonText>지금 신청하기</SignUpButtonText>
            <RightAngleIcon />
          </SignUpButton>
        </TitleWrapper>
        <MobileSignUpButton>
          <SignUpButtonText>지금 신청하기</SignUpButtonText>
          <RightAngleIcon />
        </MobileSignUpButton>
      </ContentWrapper>
    </Wrapper>
  </Container>
);

export default IntroSection;
