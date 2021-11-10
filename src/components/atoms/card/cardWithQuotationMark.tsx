import styled from "styled-components";

import { ExtraBold48, Light24 } from "src/components/atoms/text/Typographies";

interface Props {
  content: string;
  className?: string;
}

const Card = styled.div`
  width: 340px;
  height: 474px;
  background-color: #ffffff;
  border-radius: 25px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const QuotationMark = styled(ExtraBold48)``;

const ContextText = styled(Light24)`
  white-space: pre-line;
`;

const CardWithQuotationMark = ({ className, content }: Props) => (
  <Card className={className}>
    <QuotationMark>“</QuotationMark>
    <ContextText>{content}</ContextText>
    <QuotationMark>”</QuotationMark>
  </Card>
);

export default CardWithQuotationMark;
