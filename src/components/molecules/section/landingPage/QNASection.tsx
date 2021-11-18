import styled from "styled-components";

import {
  Light16,
  Medium36,
  Light24,
} from "src/components/atoms/text/Typographies";
import images from "src/images";
import { FLOAT_KEYFRAME } from "src/styles/animation";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 115px;
  padding-bottom: 80px;

  @media screen and (max-width: 750px) {
    padding-top: 70px;
    padding-bottom: 100px;
  }
`;

const Text = styled(Medium36)`
  @media screen and (max-width: 750px) {
    font-size: 32px;
    white-space: pre-line;
  }
`;

const Footer = styled(Light16)`
  color: #868686;

  @media screen and (max-width: 750px) {
    white-space: pre-line;
    text-align: center;
    line-height: 22px;
    font-size: 12px;
  }
`;

const BorderChip = styled.div`
  padding: 12px 20px;
  border: 2px solid #79cea7;
  background-color: #fafafa;
  border-radius: 60px;
  margin-top: 30px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${FLOAT_KEYFRAME} 5s ease-in-out infinite;

  @media screen and (max-width: 750px) {
    padding: 5px 16px;
    margin-top: 20px;
    margin-bottom: 30px;
  }
`;

const Email = styled(Light24)`
  @media screen and (max-width: 750px) {
    font-size: 16px;
  }
`;

const EmailIcon = styled.img.attrs({ src: images.emailIcon })`
  @media screen and (max-width: 750px) {
    width: 26px;
  }
`;

const Circle = styled.div`
  width: 50px;
  height: 50px;
  background-color: #79cea7;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 30px;
  margin-right: 15px;

  @media screen and (max-width: 750px) {
    width: 40px;
    height: 40px;
  }
`;

const QNASection = () => (
  <Container>
    <Text>{`더 궁금하신 사항은\n메일로 문의주세요!`}</Text>
    <BorderChip>
      <Circle>
        <EmailIcon />
      </Circle>
      <Email>specialban.official@gmail.com</Email>
    </BorderChip>
    <Footer>{`ⓒ 2021 우리동네특별반\nAll Rights Reserved`}</Footer>
  </Container>
);

export default QNASection;
