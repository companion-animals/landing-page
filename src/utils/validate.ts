import * as yup from "yup";

export const userRegSchema = yup
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
