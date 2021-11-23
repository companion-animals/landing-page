import styled from "styled-components";

import {
  Light16,
  Medium36,
  Light24,
} from "src/components/atoms/text/Typographies";
import images from "src/images";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 115px;
  padding-bottom: 80px;

  @media screen and (max-width: 900px) {
    padding-top: 70px;
    padding-bottom: 100px;
  }
`;

const Text = styled(Medium36)`
  @media screen and (max-width: 900px) {
    font-size: 28px;
    white-space: pre-line;
  }
`;

const Footer = styled.footer`
  padding: 0 16px;
`;

const Info = styled(Light16)`
  color: #868686;

  @media screen and (max-width: 900px) {
    white-space: pre-line;
    text-align: center;
    line-height: 22px;
    font-size: 12px;
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
    <Footer>
      <Info>
        드로우코퍼레이션| 대표: 박진주 | 사업자등록번호: 594-45-00660 |
        통신판매업신고번호: 제 2021-서울중랑-1384호
      </Info>
      <Info>서울시 중랑구 봉화산로 193 | 1103-1207</Info>
      <Info>{`ⓒ 2021 우리동네특별반\nAll Rights Reserved`}</Info>
    </Footer>
  </Container>
);

export default QNASection;
