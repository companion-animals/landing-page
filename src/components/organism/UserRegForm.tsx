import { useState } from "react";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import styled from "styled-components";
import tw from "twin.macro";

import BasicButton from "src/components/atom/button/BasicButton";
import BasicInputField from "src/components/molecules/BasicInputField";
import CheckBoxWithLabel from "src/components/molecules/CheckBoxWithLabel";
import RadioWithLabel from "src/components/molecules/RadioWithLabel";
import { OK } from "src/constatnts/networkStatus";
import { regUser } from "src/controller/authController";
import { userRegSchema } from "src/utils/validate";

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
  const [isLoading, setIsLoading] = useState(false);
  const [termsAgrees, setTermsAgrees] = useState([false, false, false]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<UserRegFormData>({ resolver: yupResolver(userRegSchema) });
  const isAllTermsChecked =
    termsAgrees.findIndex((flag) => flag === false) === -1;
  const onSubmit = async (data: UserRegFormData) => {
    if (isLoading) {
      return;
    }

    if (!isAllTermsChecked) {
      toast.error("약관에 모두 동의해주세요");
      return;
    }

    setIsLoading(true);
    try {
      const { status, message } = await regUser(data);

      if (status === OK) {
        // OK case
      } else {
        toast.error(message);
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
        checked={termsAgrees[0]}
        onChange={() => {
          const newTermsAgree = termsAgrees.map((flag, index) => {
            if (index === 0) {
              flag = !flag;
            }
            return flag;
          });
          setTermsAgrees(newTermsAgree);
        }}
      />
      <Check
        label={
          <Link href="https://www.notion.so/837912043a0844cfb15032a0ee345700">
            개인정보 처리방침 동의 (필수)
          </Link>
        }
        checked={termsAgrees[1]}
        onChange={() => {
          const newTermsAgree = termsAgrees.map((flag, index) => {
            if (index === 1) {
              flag = !flag;
            }
            return flag;
          });
          setTermsAgrees(newTermsAgree);
        }}
      />
      <Check
        label={
          <Link href="https://www.notion.so/e302edc5d39744b2a6c4215ed335cf3e">
            펫시터 약관 동의 (필수)
          </Link>
        }
        checked={termsAgrees[2]}
        onChange={() => {
          const newTermsAgree = termsAgrees.map((flag, index) => {
            if (index === 2) {
              flag = !flag;
            }
            return flag;
          });
          setTermsAgrees(newTermsAgree);
        }}
      />
      <Submit type="submit">회원가입</Submit>
    </Form>
  );
};

export default UserRegForm;
