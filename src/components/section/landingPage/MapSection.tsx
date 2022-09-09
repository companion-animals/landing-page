import styled from "styled-components";

import { Bold42, Medium42 } from "src/components/text/Typographies";
import images from "src/images";

const MapSection = () => (
  <Container>
    <MediumText>우리동네 특별반이</MediumText>
    <BoldTitle>
      내 주변의 <ColoredTitle>특수동물 펫시터</ColoredTitle>
      {`를\n매칭해드려요.`}
    </BoldTitle>
    <Map />
  </Container>
);

export default MapSection;

const Container = styled.div`
  width: 100%;
  background-color: #fafafa;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0px 50px 0px;

  @media screen and (max-width: 900px) {
    padding: 16px 0px 28px 0px;
  }
`;

const Map = styled.img.attrs({ src: images.map })`
  width: 700px;
  margin-top: 80px;

  @media screen and (max-width: 900px) {
    width: 400px;
    margin-top: 50px;
  }
`;

const MediumText = styled(Medium42)`
  white-space: pre-line;
  margin-top: 70px;
  text-align: center;
  line-height: 57px;

  @media screen and (max-width: 900px) {
    font-size: 24px;
    margin-bottom: 5px;
    line-height: 35px;
    margin-top: 40px;
  }
`;

const BoldTitle = styled(Bold42)`
  display: inline;
  white-space: pre-line;
  text-align: center;
  line-height: 57px;

  @media screen and (max-width: 900px) {
    font-size: 24px;
    line-height: normal;
    margin-bottom: 5px;
  }
`;

const ColoredTitle = styled(BoldTitle)`
  color: #79cea7;
`;
