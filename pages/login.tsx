import Link from "next/link";

import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import styled from "styled-components";
import tw from "twin.macro";

import BasicButton from "src/components/atom/button/BasicButton";
import Heading from "src/components/atom/heading/Heading";
import SEO from "src/components/head/SEOAndOG";
import BasicInputField from "src/components/molecules/BasicInputField";
import MaxWidthContentTemplate from "src/components/template/MaxWidthContentTemplate";
import { OK } from "src/constatnts/networkStatus";
import { login } from "src/controller/authController";

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

const LoginPage = () => {
  const { register, handleSubmit } = useForm<LoginData>();
  const onSubmit = async (data: LoginData) => {
    // submit
    if (!data.email) {
      toast.warn("email을 입력해주세요");
      return;
    }
    if (!data.password) {
      toast.warn("password를 입력해주세요");
      return;
    }

    const { status, message } = await login(data);
    if (status === OK) {
      window.location.href = "/";
    } else if (message) {
      toast.error(message);
    }
  };
  return (
    <Container>
      <SEO title="로그인 - 우리동네 특별반" allowSearchIndex={false} />
      <Title>로그인</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input label="이메일 (ID)" {...register("email")} type="text" />
        <Input label="비밀번호" {...register("password")} type="password" />
        <Submit type="submit">로그인</Submit>
        <Link href="/user-reg" passHref>
          <Submit buttonType="outline">회원가입</Submit>
        </Link>
      </Form>
    </Container>
  );
};

export default LoginPage;
