import styled from "styled-components";

import TopBar from "src/components/molecules/bar/TopBar";
import DetailSection from "src/components/molecules/section/landingPage/DetailSection";
import ExplanationSection from "src/components/molecules/section/landingPage/ExplanationSection";
import FAQSection from "src/components/molecules/section/landingPage/FAQSection";
import IntroSection from "src/components/molecules/section/landingPage/IntroSection";
import QNASection from "src/components/molecules/section/landingPage/QNASection";
import ReviewSection from "src/components/molecules/section/landingPage/ReviewSection";
import SecondSection from "src/components/molecules/section/landingPage/SecondSection";
import SpeechBubbleSection from "src/components/molecules/section/landingPage/SpeechBubbleSection";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #dbd7fa;
  max-width: 1670px;

  @media screen and (max-width: 750px) {
    max-width: 522px;
  }
`;
const Home = () => (
  <Container>
    <TopBar />
    <IntroSection />
    <SecondSection />
    <SpeechBubbleSection />
    <DetailSection />
    <Line />
    <ExplanationSection />
    <ReviewSection />
    <FAQSection />
    <QNASection />
  </Container>
);

export default Home;
