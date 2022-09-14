import styled from "styled-components";
import tw from "twin.macro";

import BasicButton, { Props } from "./BasicButton";

const ButtonContainer = styled.div`
  ${tw`
		fixed
		bottom-0
		w-full
		py-6
		px-4
		bg-transparent
		sm:px-8
	`}
`;

const Button = styled(BasicButton)`
  ${tw`
		max-w-screen-lg
		w-full
	`}
`;

const BottomFixedButton = (props: Props) => (
  <ButtonContainer>
    <Button {...props} />
  </ButtonContainer>
);

export default BottomFixedButton;
