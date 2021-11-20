import styled from "styled-components";

import { ExtraBold36, Light20 } from "src/components/atoms/text/Typographies";
import { ScrollFadeInAnimatedItem } from "src/hooks/useScrollFadeIn";

interface Props {
  content: string;
  className?: string;
  animatedItem?: ScrollFadeInAnimatedItem;
}

const Card = styled.div`
  width: 280px;
  height: 420px;
  background-color: #ffffff;
  border-radius: 25px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 900px) {
    width: 220px;
    height: 320px;
  }
`;

const QuotationMark = styled(ExtraBold36)`
  @media screen and (max-width: 900px) {
    font-size: 30px;
  }
`;

const ContextText = styled(Light20)`
  white-space: pre-line;

  @media screen and (max-width: 900px) {
    font-size: 16px;
    line-height: 26px;
  }
`;

const CardWithQuotationMark = ({ className, content, animatedItem }: Props) => (
  <Card className={className} {...animatedItem}>
    <QuotationMark>“</QuotationMark>
    <ContextText>{content}</ContextText>
    <QuotationMark>”</QuotationMark>
  </Card>
);

export default CardWithQuotationMark;
