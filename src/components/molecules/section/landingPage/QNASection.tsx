import styled from "styled-components";

import {
  Light56,
  Light26,
  Light34,
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

const Text = styled(Light56)``;

const Footer = styled(Light26)``;

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
`;

const Email = styled(Light34)``;

const EmailIcon = styled.img.attrs({ src: images.emailIcon })`
  margin-right: 20px;
`;
const QNASection = () => (
  <Container>
    <Text>더 궁금하신 사항은 메일로 문의주세요!</Text>
    <BorderChip>
      <EmailIcon />
      <Email>specialban.official@gmail.com</Email>
    </BorderChip>
    <Footer>ⓒ 2021 우리동네특별반 All Rights Reserved</Footer>
  </Container>
);

export default QNASection;
