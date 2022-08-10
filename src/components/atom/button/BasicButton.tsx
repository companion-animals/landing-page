import styled from "styled-components";
import tw from "twin.macro";

const Button = styled.button`
  ${tw`
		w-full
		p-4
		rounded-lg
		disabled:bg-gray-300
		bg-primary
		text-white
		font-bold
		bg-none
		[&:type="submit"]:bg-primary
  	
	`}
  &[type="submit"] {
    background-color: #79cea7;
  }
`;

export default Button;
