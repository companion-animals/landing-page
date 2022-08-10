import styled from "styled-components";
import tw from "twin.macro";

const Heading1 = styled.h1`
  ${tw`
		font-bold
		text-6xl
	`}
`;

const Heading2 = styled.h2`
  ${tw`
		font-bold
		text-4xl
	`}
`;

export default {
  H1: Heading1,
  H2: Heading2,
};
