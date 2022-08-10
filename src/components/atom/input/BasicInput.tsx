import { InputHTMLAttributes } from "react";

import styled from "styled-components";
import tw from "twin.macro";

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  isErrorCase?: boolean;
  isFocused?: boolean;
}

const Input = styled.input<{ isErrorCase?: boolean }>`
  ${tw`
		w-full
		border-b
		border-solid
		px-4
		py-2
		text-lg
		font-bold
		focus:outline-none
		focus:border-b-black
	`}
  ${({ isErrorCase }) =>
    isErrorCase ? tw`border-b-red-500` : tw`border-b-gray-300`}
`;

export default Input;
