import React, { InputHTMLAttributes, forwardRef } from "react";

import styled from "styled-components";
import tw from "twin.macro";

import BasicRadio from "src/components/atom/input/BasicRadio";
import Label1 from "src/components/atom/label/Label1";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: React.ReactNode;
  errorMessage?: string;
}

const Container = styled.div`
  ${tw`
		flex
		flex-col
	`}
`;

const Row = styled.div`
  ${tw`
		flex
		flex-row
		items-center
	`}
`;

const Radio = styled(BasicRadio)`
  ${tw`
		mr-1
	`}
`;

const ErrorCase = styled.span`
  ${tw`
		text-red-500
		mt-2
	`}
`;

const RadioWithLabel = forwardRef<HTMLInputElement, Props>(
  ({ className, id, label, errorMessage, ...rest }, ref) => (
    <Container className={className}>
      <Row>
        <Radio id={id} {...rest} ref={ref} />
        <Label1 htmlFor={id}>{label}</Label1>
      </Row>
      {errorMessage && <ErrorCase>{errorMessage}</ErrorCase>}
    </Container>
  ),
);

export default RadioWithLabel;
