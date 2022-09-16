import styled from "styled-components";
import tw from "twin.macro";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Container = styled.div`
  ${tw`
		flex
		flex-col
		w-full
		h-full
		justify-center
		items-center
	`}
`;

const CenterContentTemplate = ({ className, children }: Props) => (
  <Container className={className}>{children}</Container>
);

export default CenterContentTemplate;
