import styled from "styled-components";

import XEIcon from "src/components/atoms/icon/XEIcon";
import { ExtraBold24, Heavy36 } from "src/components/atoms/text/Typographies";

const Container = styled.div`
  display: none;

  @media screen and (max-width: 750px) {
    width: 100%;
    background-color: #ffffff;
    border: 1px solid #d2d2d2;
    padding: 35px 50px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const Text = styled(Heavy36)`
  color: #7065e7;
`;

const ApplyButton = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  border-radius: 10px;
  padding: 10px 20px;
  border: 3px solid #8d86eb;
`;

const RightAngleIcon = styled(XEIcon).attrs({ type: "xi-angle-right" })`
  color: #7065e7;
  font-weight: 800;
  font-size: 20px;
  margin-left: 5px;
`;

const ApplyButtonText = styled(ExtraBold24)`
  color: #8d86eb;
  margin-top: 0px;
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
