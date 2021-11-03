import styled from "styled-components";

import { Light26 } from "src/components/atoms/text/Typographies";

interface Props {
  title: string;
  content: string;
}

const TitleBox = styled.div`
  width: 1000px;
  background-color: #7065e7;
  padding-left: 33px;
  padding-top: 15px;
  padding-bottom: 15px;
`;

const ContentBox = styled.div`
  background-color: #ffffff;
  padding-left: 33px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

const Content = styled(Light26)`
  white-space: pre-line;
`;

const Title = styled(Content)`
  color: #ffffff;
`;

const QNABox = ({ title, content }: Props) => (
  <>
    <TitleBox>
      <Title>{title}</Title>
    </TitleBox>
    <ContentBox>
      <Content>{content}</Content>
    </ContentBox>
  </>
);

export default QNABox;
