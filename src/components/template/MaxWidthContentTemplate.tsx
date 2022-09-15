import styled from "styled-components";
import tw from "twin.macro";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

const Container = styled.div`
  ${tw`
		flex
		w-full
		justify-center
	`}
`;

const Content = styled.div`
  ${tw`
		pt-16
		w-full
		max-w-screen-lg
		min-h-screen
		bg-white
		pb-8
	`}
`;

const MaxWidthContentTemplate = ({ className, children }: Props) => (
  <Container>
    <Content className={className}>{children}</Content>
  </Container>
);

export default MaxWidthContentTemplate;
