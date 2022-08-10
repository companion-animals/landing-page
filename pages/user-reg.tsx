import styled from "styled-components";
import tw from "twin.macro";

import Heading from "src/components/atom/heading/Heading";
import UserRegForm from "src/components/organism/UserRegForm";
import MaxWidthContentTemplate from "src/components/template/MaxWidthContentTemplate";

const Container = styled(MaxWidthContentTemplate)`
  ${tw`
		px-4
		items-center
		flex
		flex-col
	`}
`;

const Title = styled(Heading.H2)`
  ${tw`mb-8`}
`;

const UserRegPage = () => (
  <Container>
    <Title>회원가입</Title>
    <UserRegForm />
  </Container>
);

export default UserRegPage;
