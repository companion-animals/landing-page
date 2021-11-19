import styled from "styled-components";

import XEIcon from "src/components/atoms/icon/XEIcon";
import { ExtraBold18, Heavy30 } from "src/components/atoms/text/Typographies";

const APPLY_LINK =
  "https://docs.google.com/forms/d/e/1FAIpQLSdA279z1g6td4dr9nV-nf55BfQe3FBnwJrDBzKcbCyFnd8cgQ/viewform?usp=sf_link";

const Container = styled.div`
  width: 100%;
  background-color: #ffffff;
  border-bottom: 1px solid #d2d2d2;
  padding: 25px 50px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 900px) {
    padding: 15px 30px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1080px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Text = styled(Heavy30)`
  color: #79cea7;

  @media screen and (max-width: 900px) {
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
  border: 3px solid #79cea7;

  @media screen and (max-width: 900px) {
    padding: 4px 5px;
    border-width: 1px;
  }
`;

const RightAngleIcon = styled(XEIcon).attrs({ type: "xi-angle-right" })`
  color: #79cea7;
  font-weight: 800;
  font-size: 14px;
  margin-left: 5px;

  @media screen and (max-width: 900px) {
    font-size: 10px;
  }
`;

const ApplyButtonText = styled(ExtraBold18)`
  color: #79cea7;
  margin-top: 0px;
  margin-left: 3px;

  @media screen and (max-width: 900px) {
    font-size: 12px;
    margin-left: 3px;
  }
`;

const Link = styled.a`
  text-decoration: none;
`;

const TopBar = () => (
  <Container>
    <Wrapper>
      <Text>SPECIALBAN</Text>
      <Link
        id="sitterApplyButton"
        target="_blank"
        rel="noreferrer"
        href={APPLY_LINK}
      >
        <ApplyButton>
          <ApplyButtonText> 펫시터 지원</ApplyButtonText>
          <RightAngleIcon />
        </ApplyButton>
      </Link>
    </Wrapper>
  </Container>
);

export default TopBar;
