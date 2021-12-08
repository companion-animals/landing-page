import styled from "styled-components";

import { Medium36, Light24 } from "src/components/text/Typographies";
import images from "src/images";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 115px;

  @media screen and (max-width: 900px) {
    padding-top: 70px;
  }
`;

const Text = styled(Medium36)`
  @media screen and (max-width: 900px) {
    font-size: 28px;
    white-space: pre-line;
  }
`;

const BorderChip = styled.div`
  padding: 12px 16px;
  border: 2px solid #79cea7;
  background-color: #fafafa;
  border-radius: 60px;
  margin-top: 30px;
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 900px) {
    padding: 8px 10px;
    margin-top: 25px;
    margin-bottom: 30px;
  }
`;

const Email = styled(Light24)`
  @media screen and (max-width: 900px) {
    font-size: 16px;
  }
`;

const EmailIcon = styled.img.attrs({ src: images.emailIcon })`
  @media screen and (max-width: 900px) {
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

  @media screen and (max-width: 900px) {
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
  </Container>
);

export default QNASection;
