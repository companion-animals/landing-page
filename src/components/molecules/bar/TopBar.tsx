import styled from "styled-components";

import XEIcon from "src/components/atoms/icon/XEIcon";
import { ExtraBold18, Heavy30 } from "src/components/atoms/text/Typographies";

const Container = styled.div`
  width: 100%;
  background-color: #ffffff;
  border: 1px solid #d2d2d2;
  padding: 25px 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 750px) {
    padding: 15px 30px;
  }
`;

const Text = styled(Heavy30)`
  color: #7065e7;

  @media screen and (max-width: 750px) {
    font-size: 20px;
  }
`;

const ApplyButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 5px 10px;
  border: 3px solid #8d86eb;

  @media screen and (max-width: 750px) {
    padding: 4px 5px;
    border-width: 1px;
  }
`;

const RightAngleIcon = styled(XEIcon).attrs({ type: "xi-angle-right" })`
  color: #7065e7;
  font-weight: 800;
  font-size: 14px;
  margin-left: 5px;

  @media screen and (max-width: 750px) {
    font-size: 10px;
  }
`;

const ApplyButtonText = styled(ExtraBold18)`
  color: #8d86eb;
  margin-top: 0px;
  margin-left: 3px;

  @media screen and (max-width: 750px) {
    font-size: 12px;
    margin-left: 3px;
  }
`;

const TopBar = () => (
  <Container>
    <Text>우리동네 특별반</Text>
    <ApplyButton>
      <ApplyButtonText> 펫시터 지원</ApplyButtonText>
      <RightAngleIcon />
    </ApplyButton>
  </Container>
);

export default TopBar;
