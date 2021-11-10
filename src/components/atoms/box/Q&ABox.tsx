import styled from "styled-components";

import { Light26 } from "src/components/atoms/text/Typographies";

interface Props {
  className?: string;
  title: string;
  content: string;
}

const Container = styled.div`
  width: 1000px;

  @media screen and (max-width: 750px) {
    width: 573px;
  }
`;

const TitleBox = styled.div`
  background-color: #7065e7;
  border: 2px solid #b7b7b7;
`;

const ContentBox = styled.div`
  background-color: #ffffff;
  border: 2px solid #b7b7b7;

  @media screen and (max-width: 750px) {
    padding-right: 30px;
  }
`;

const Content = styled(Light26)`
  white-space: pre-line;
  margin-left: 33px;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 750px) {
    white-space: normal;
  }
`;

const Title = styled(Content)`
  color: #ffffff;
  margin-left: 33px;
  margin-top: 15px;
  margin-bottom: 15px;
`;

const QNABox = ({ className, title, content }: Props) => (
  <Container className={className}>
    <TitleBox>
      <Title>{title}</Title>
    </TitleBox>
    <ContentBox>
      <Content>{content}</Content>
    </ContentBox>
  </Container>
);

export default QNABox;
