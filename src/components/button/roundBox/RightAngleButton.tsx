import styled from "styled-components";

import RoundBoxButton from "src/components/button/roundBox";
import XEIcon from "src/components/icon/XEIcon";

interface Props {
  className?: string;
  title: string;
}

const RightAngleButton = ({ className, title }: Props) => (
  <RoundBoxButton className={className} title={title}>
    <RightAngleIcon />
  </RoundBoxButton>
);

export default RightAngleButton;

const RightAngleIcon = styled(XEIcon).attrs({ type: "xi-angle-right" })`
  color: #ffffff;
  font-weight: 800;
  font-size: 18px;
  margin-left: 8px;
  @media screen and (max-width: 900px) {
    font-size: 15px;
  }
`;
