import styled from "styled-components";

import { ExtraBold22 } from "src/components/text/Typographies";

interface Props {
  children: React.ReactNode;
  className?: string;
  title: string;
}

const RoundBoxButton = ({ children, className, title }: Props) => (
  <RoundBox className={className}>
    <Text>{title}</Text>
    {children}
  </RoundBox>
);

export default RoundBoxButton;

const RoundBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  margin-top: 50px;
  background-color: #79cea7;
  padding: 15px 30px;
  width: 210px;
  margin-top: 30px;
  cursor: pointer;

  @media screen and (max-width: 900px) {
    display: none;
  }
`;

const Text = styled(ExtraBold22)`
  color: #ffffff;

  @media screen and (max-width: 900px) {
    font-size: 18px;
  }
`;
