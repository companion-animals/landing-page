import React from "react";

import styled from "styled-components";
import tw from "twin.macro";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Box = styled.div`
  ${tw`
		bg-gray-100
		rounded-lg
		p-4
	`}
`;

const InfoBox = ({ className, children }: Props) => (
  <Box className={className}>{children}</Box>
);

export default InfoBox;
