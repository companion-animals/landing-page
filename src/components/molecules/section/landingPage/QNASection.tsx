import styled from "styled-components";

import {
  Light56,
  Light26,
  Light34,
  Light54,
} from "src/components/atoms/text/Typographies";
import images from "src/images";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 115px;
  padding-bottom: 80px;
`;

const Text = styled(Light56)`
  @media screen and (max-width: 750px) {
    font-size: 54px;
    white-space: pre-line;
  }
`;

const Footer = styled(Light26)`
  color: #868686;

  @media screen and (max-width: 750px) {
    white-space: pre-line;
    text-align: center;
  }
`;

const BorderChip = styled.div`
  padding: 30px;
  border: 2px solid #7065e7;
  background-color: #fafafa;
  border-radius: 60px;
  margin-top: 79px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 750px) {
    padding: 20px;
    margin-top: 62px;
    margin-bottom: 59px;
  }
`;

const Email = styled(Light34)`
  @media screen and (max-width: 750px) {
    font-size: 32px;
  }
`;

const EmailIcon = styled.img.attrs({ src: images.emailIcon })`
  margin-right: 20px;
`;
const QNASection = () => (
  <Container>
    <Text>{`더 궁금하신 사항은\n메일로 문의주세요!`}</Text>

    <BorderChip>
      <EmailIcon />
      <Email>specialban.official@gmail.com</Email>
    </BorderChip>
    <Footer>{`ⓒ 2021 우리동네특별반\nAll Rights Reserved`}</Footer>
  </Container>
);

export default QNASection;
