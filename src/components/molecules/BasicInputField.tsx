import React, { forwardRef } from "react";

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
  errorMessage?: string;
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

const ErrorCase = styled.span`
  ${tw`
		text-red-500
	`}
`;

const BasicInputField = forwardRef<HTMLInputElement, Props>(
  ({ className, label, description, errorMessage, ...inputProps }, ref) => (
    <Container className={className}>
      <Label>{label}</Label>
      <Input {...inputProps} ref={ref} />
      {description}
      {errorMessage && <ErrorCase>{errorMessage}</ErrorCase>}
    </Container>
  ),
);

export default BasicInputField;
