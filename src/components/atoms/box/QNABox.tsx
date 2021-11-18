import styled from "styled-components";

import { Light20 } from "src/components/atoms/text/Typographies";

interface Props {
  className?: string;
  title: string;
  content: string;
}

const Container = styled.div`
  width: 900px;

  @media screen and (max-width: 750px) {
    width: 320px;
  }
`;

const TitleBox = styled.div`
  background-color: #79cea7;
  padding-top: 10px;
  padding-bottom: 10px;

  @media screen and (max-width: 750px) {
    padding-top: 5px;
    padding-bottom: 5px;
  }
`;

const ContentBox = styled.div`
  background-color: #ffffff;
  border: 2px solid #b7b7b7;

  @media screen and (max-width: 750px) {
    padding-right: 30px;
  }
`;

const Content = styled(Light20)`
  white-space: pre-line;
  margin-left: 33px;
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 750px) {
    white-space: normal;
    font-size: 12px;
    margin-top: 15px;
    margin-bottom: 15px;
    line-height: normal;
  }
`;

const Title = styled(Content)`
  color: #ffffff;
  margin-left: 33px;
  line-height: 0px;
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
