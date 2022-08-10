import React, { InputHTMLAttributes } from "react";

import styled from "styled-components";
import tw from "twin.macro";

import BasicRadio from "src/components/atom/input/BasicRadio";
import Label1 from "src/components/atom/label/Label1";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label: React.ReactNode;
}

const Container = styled.div`
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

const RadioWithLabel = ({ className, id, label, ...rest }: Props) => (
  <Container className={className}>
    <Radio id={id} {...rest} />
    <Label1 htmlFor={id}>{label}</Label1>
  </Container>
);

export default RadioWithLabel;
