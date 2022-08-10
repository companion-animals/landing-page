import React from "react";

import styled from "styled-components";
import tw from "twin.macro";

import BasicInput, {
  Props as InputProps,
} from "src/components/atom/input/BasicInput";
import Label1 from "src/components/atom/label/Label1";

interface Props extends InputProps {
  className?: string;
  label: string;
  description?: React.ReactNode;
}

const Container = styled.div`
  ${tw`
		w-full
		flex
		flex-col
	`}
`;

const Label = styled(Label1)`
  ${tw`
		mb-2
	`}
`;

const Input = styled(BasicInput)`
  ${tw`
		mb-2
	`}
`;

const BasicInputField = ({
  className,
  label,
  description,
  ...inputProps
}: Props) => (
  <Container className={className}>
    <Label>{label}</Label>
    <Input {...inputProps} />
    {description}
  </Container>
);

export default BasicInputField;
