import React, { InputHTMLAttributes, forwardRef } from "react";

import styled from "styled-components";
import tw from "twin.macro";

import BasicCheckBox from "src/components/atom/input/BasicCheckBox";
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

const CheckBox = styled(BasicCheckBox)`
  ${tw`
		mr-1
	`}
`;

const CheckBoxWithLabel = forwardRef<HTMLInputElement, Props>(
  ({ className, id, label, ...rest }, ref) => (
    <Container className={className}>
      <CheckBox id={id} {...rest} ref={ref} />
      <Label1 htmlFor={id}>{label}</Label1>
    </Container>
  ),
);

export default CheckBoxWithLabel;
