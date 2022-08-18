import { useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import tw from "twin.macro";
import * as yup from "yup";

import BasicButton from "src/components/atom/button/BasicButton";
import BasicInputField from "src/components/molecules/BasicInputField";
import CheckBoxWithLabel from "src/components/molecules/CheckBoxWithLabel";
import RadioWithLabel from "src/components/molecules/RadioWithLabel";
import { OK } from "src/constatnts/networkStatus";
import { regUser } from "src/controller/authController";

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

const userRegSchema = yup
  .object({
    name: yup.string().required("이름을 입력해주세요"),
    email: yup
      .string()
      .email("이메일 형식이 아닙니다")
      .required("이메일을 입력해주세요"),
    birth: yup
      .date()
      .min("1900.12.31", "생년월일을 다시 확인해주세요")
      .required("생년월일을 입력해주세요"),
    password: yup
      .string()
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/,
        "최소 8글자, 영문과 숫자의 조합으로 이루어져야 합니다",
      )
      .required("비밀번호를 입력해주세요"),
    "password-check": yup
      .string()
      .test(
        "password check",
        "비밀번호가 일치하지 않습니다",
        (value, context) => context.parent.password === value,
      )
      .required("비밀번호 확인을 입력해주세요"),
    sex: yup.string().oneOf(["man", "woman"]).required("성별을 선택해주세요"),
  })
  .required();

const UserRegForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegFormData>({ resolver: yupResolver(userRegSchema) });
  const onSubmit = async (data: UserRegFormData) => {
    if (isLoading) {
      return;
    }

    setIsLoading(true);
    try {
      const { status, message } = await regUser(data);

      if (status === OK) {
        // OK case
      } else {
        // error case
      }
    } catch (error) {
      // error case
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        {...register("name")}
        label="이름"
        type="text"
        errorMessage={errors.name?.message}
      />
      <Input
        {...register("email")}
        label="이메일(ID)"
        type="email"
        errorMessage={errors.email?.message}
      />
      <Input
        {...register("birth", { valueAsDate: true })}
        label="생년월일"
        type="date"
        errorMessage={errors.birth?.message}
      />
      <SexContainer>
        <Radio {...register("sex")} label="남자" value="man" />
        <Radio {...register("sex")} label="여자" value="woman" />
      </SexContainer>

      <Input
        {...register("password")}
        label="비밀번호"
        type="password"
        errorMessage={errors.password?.message}
      />
      <Input
        {...register("password-check")}
        label="비밀번호 확인"
        type="password"
        errorMessage={errors["password-check"]?.message}
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
