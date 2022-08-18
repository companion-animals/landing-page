import styled, { css } from "styled-components";
import tw from "twin.macro";

type ButtonType = "primary" | "outline";

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

const Button = styled.button<{ buttonType?: ButtonType }>`
  ${tw`
		w-full
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

export default Button;
