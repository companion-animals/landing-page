import styled from "styled-components";

import QNABox from "src/components/atoms/box/Q&ABox";
import { ExtraBold56 } from "src/components/atoms/text/Typographies";

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 97px;
  padding-bottom: 184px;
  background-color: #e5e2f2;
`;

const BoldText = styled(ExtraBold56)``;

const ContentWrapper = styled.div`
  margin-top: 70px;
`;

const FAQSection = () => (
  <Container>
    <BoldText>FAQ</BoldText>
    <ContentWrapper>
      <QNABox
        title="Q. 육지거북이나 스네이크도 돌봄이 가능한가요?"
        content={`A. 네, 가능합니다. 다만, 개체의 크기나 질병 유무에 따라 돌봄이 어려울수도 있어,
        신청한 동물이 돌봄 불가능한 경우 별도로 연락 드리고 있습니다.`}
      />
      <QNABox
        title="Q. 지방도 가능한가요?"
        content={`A. 아쉽게도 현재는 수도권 내만 서비스가 가능합니다. 돌봄에 어려움을 겪는
        지방의 집사분들을 위해 서비스 가능 구역을 점차 늘려갈 계획입니다.`}
      />
      <QNABox
        title="Q. 돌봄비는 얼마 정도 하나요?"
        content={`A. 최저 1박기준 3,000원부터 시작이나, 특수동물 특성상 어떤 개체인가에 따라 가격대가
        크게 차이납니다. 자세한 가격은 신청 후 정확하게 안내받으실 수 있습니다.`}
      />
      <QNABox
        title="Q. 신청 후 취소도 가능한가요?"
        content="A. 신청 후에도 결제전 취소가 가능합니다."
      />
    </ContentWrapper>
  </Container>
);
export default FAQSection;
