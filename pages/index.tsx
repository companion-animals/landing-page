import styled from "styled-components";

import TopBar from "src/components/bar/TopBar";
import Footer from "src/components/footer/Footer";
import DetailSection from "src/components/section/landingPage/DetailSection";
import ExplanationSection from "src/components/section/landingPage/ExplanationSection";
import FAQSection from "src/components/section/landingPage/FAQSection";
import IntroSection from "src/components/section/landingPage/IntroSection";
import QNASection from "src/components/section/landingPage/QNASection";
import ReviewSection from "src/components/section/landingPage/ReviewSection";
import SecondSection from "src/components/section/landingPage/SecondSection";
import SpeechBubbleSection from "src/components/section/landingPage/SpeechBubbleSection";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  padding-bottom: 80px;
  @media screen and (max-width: 900px) {
    padding-bottom: 100px;
  }
`;

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #dce4ec;
  max-width: 1670px;
  z-index: 1;

  @media screen and (max-width: 900px) {
    max-width: 350px;
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
    <Footer />
  </Container>
);

export default Home;
