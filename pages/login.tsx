import styled from "styled-components";
import tw from "twin.macro";

import BasicButton from "src/components/atom/button/BasicButton";
import Heading from "src/components/atom/heading/Heading";
import BasicInputField from "src/components/molecules/BasicInputField";
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

const Form = styled.form`
  ${tw`
		w-full
	`}
`;

const Input = styled(BasicInputField)`
  ${tw`mt-4`}
`;

const Submit = styled(BasicButton)`
  ${tw`
		w-full
		mt-4`}
`;

const LoginPage = () => (
  <Container>
    <Title>로그인</Title>
    <Form>
      <Input label="이메일 (ID)" type="text" />
      <Input label="비밀번호 (ID)" type="password" />
      <Submit type="submit">회원가입</Submit>
      <Submit type="submit" buttonType="outline">
        로그인
      </Submit>
    </Form>
  </Container>
);

export default LoginPage;
