import styled from "styled-components";

import XEIcon from "src/components/atoms/icon/XEIcon";
import {
  ExtraBold56,
  ExtraBold28,
} from "src/components/atoms/text/Typographies";
import images from "src/images";

const Container = styled.div`
  width: 100%;
  height: 720px;
  background-color: #e4e9f5;
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  width: 100%;
  z-index: 1;
  max-width: 1180px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 230px;
  margin-right: 100px;
  display: inline;
  white-space: pre-line;
`;

const SectionTitle = styled(ExtraBold56)`
  display: inline;
`;

const ColoredTitle = styled(SectionTitle)`
  color: #7065e7;
`;

const ParrotBackground = styled.img.attrs({ src: images.parrotBG })`
  height: 720px;
  width: auto;
  position: absolute;
  top: 0;
`;

const ApplyButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-right: 26px;
  padding-left: 26px;
  background-color: #ffffff;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.32);
  border-radius: 10px;
  margin-top: 50px;
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

const SignUpButton = styled(ApplyButton)`
  background-color: #6448bf;
  padding-right: 38px;
  padding-left: 38px;
  width: 255px;
  margin-top: 45px;
`;

const SignUpButtonText = styled(ExtraBold28)`
  color: #ffffff;
`;

const ColoredAngleIcon = styled(RightAngleIcon)`
  color: #8d86eb;
`;

const IntroSection = () => (
  <Container>
    <ParrotBackground />
    <ContentWrapper>
      <ApplyButton>
        <ApplyButtonText> 펫시터 지원하기</ApplyButtonText>
        <ColoredAngleIcon />
      </ApplyButton>
      <TitleWrapper>
        <ColoredTitle>우리동네 특별반</ColoredTitle>
        <SectionTitle>{`이\n특별한 아이들을 돌봐드려요`}</SectionTitle>
        <SignUpButton>
          <SignUpButtonText>지금 신청하기</SignUpButtonText>
          <RightAngleIcon />
        </SignUpButton>
      </TitleWrapper>
    </ContentWrapper>
  </Container>
);

export default IntroSection;
