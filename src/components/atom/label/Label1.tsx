import React from "react";

import styled from "styled-components";
import tw from "twin.macro";

interface Props {
  className?: string;
  children?: React.ReactNode;
  for?: string;
}

const Label = styled.label`
  ${tw`
		text-gray-700
		text-sm
		whitespace-pre-wrap
		font-normal
	`}
`;

const Label1 = (props: Props) => <Label {...props} />;

Label1.B = styled(Label)`
  ${tw`
		font-bold
	`}
`;

export default Label1;
