import { InputHTMLAttributes } from "react";

import styled, { css } from "styled-components";
import tw from "twin.macro";

type ButtonType = "primary" | "outline";

export interface Props extends InputHTMLAttributes<HTMLButtonElement> {
  buttonType?: ButtonType;
  type?: "button" | "submit" | "reset" | undefined;
}

const primaryButtonCSS = css`
  ${tw`
		bg-primary
		text-white
	`}
`;

const outlineButtonCSS = css`
  ${tw`
		bg-white
		text-primary
		border
		border-primary
	`}
`;

const BasicButton = styled.button<{ buttonType?: ButtonType }>`
  ${tw`
		p-4
		rounded-lg
		disabled:bg-gray-300
		font-bold
		bg-none
	`}
  ${({ buttonType }) =>
    buttonType === "outline" ? outlineButtonCSS : primaryButtonCSS}
		
  &[type="submit"] {
    ${({ buttonType }) =>
      buttonType === "outline" ? outlineButtonCSS : primaryButtonCSS}
  }
`;

export default BasicButton;
