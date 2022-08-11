import { useForm } from "react-hook-form";
import styled from "styled-components";
import tw from "twin.macro";

import BasicButton from "src/components/atom/button/BasicButton";
import BasicInputField from "src/components/molecules/BasicInputField";
import CheckBoxWithLabel from "src/components/molecules/CheckBoxWithLabel";
import RadioWithLabel from "src/components/molecules/RadioWithLabel";

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

const SexContainer = styled.div`
  ${tw`
		flex
		my-2
	`}
`;

const Radio = styled(RadioWithLabel)`
  ${tw`mr-4`}
`;

const Link = styled.a.attrs({ target: "_blank", rel: "noopener noreferrer" })``;

const Check = styled(CheckBoxWithLabel)`
  ${tw`mt-2`}
`;

const UserRegForm = () => {
  const { register, handleSubmit } = useForm<UserRegFormData>();
  const onSubmit = (data: UserRegFormData) => console.log(data);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input {...register("name")} label="이름" type="text" />
      <Input {...register("email")} label="이메일(ID)" type="email" />
      <Input {...register("birth")} label="생년월일" type="date" />
      <SexContainer>
        <Radio {...register("sex")} label="남자" value="man" />
        <Radio {...register("sex")} label="여자" value="woman" />
      </SexContainer>

      <Input {...register("password")} label="비밀번호" type="password" />
      <Input
        {...register("password-check")}
        label="비밀번호 확인"
        type="password"
      />
      <Check
        label={
          <Link href="https://www.notion.so/57df7f12dae34ac0b193850620a9d409">
            우리동네 특별반 이용약관 동의 (필수)
          </Link>
        }
      />
      <Check
        label={
          <Link href="https://www.notion.so/837912043a0844cfb15032a0ee345700">
            개인정보 처리방침 동의 (필수)
          </Link>
        }
      />
      <Check
        label={
          <Link href="https://www.notion.so/e302edc5d39744b2a6c4215ed335cf3e">
            펫시터 약관 동의 (필수)
          </Link>
        }
      />
      <Submit type="submit">회원가입</Submit>
    </Form>
  );
};

export default UserRegForm;
