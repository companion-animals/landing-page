import styled from "styled-components";

import { Light16 } from "src/components/text/Typographies";

const Footer = () => (
  <FooterContainer>
    <Info>
      드로우코퍼레이션| 대표: 박진주 | 사업자등록번호: 594-45-00660 |
      통신판매업신고번호: 제 2021-서울중랑-1384호
    </Info>
    <Info>서울시 중랑구 봉화산로 193 | 대표전화: 010-5716-6127</Info>
    <Info>{`ⓒ 2021 우리동네특별반\nAll Rights Reserved`}</Info>
  </FooterContainer>
);

export default Footer;

const FooterContainer = styled.footer`
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
