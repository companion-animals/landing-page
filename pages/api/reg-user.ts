// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { setCookie } from "nookies";
import { ValidationError } from "yup";

import {
  OK,
  BAD_REQUEST,
  NOT_FOUND,
  SERVER_ERROR,
} from "src/constatnts/networkStatus";
import { insertNewUser } from "src/db/auth";
import { AlreadyExistEmailError } from "src/errors/authErrors";
import { generateLoginToken } from "src/utils/jwt";
import { userRegSchema } from "src/utils/validate";

interface ApiRequest extends NextApiRequest {
  body: UserRegFormData;
}

type Data = {
  message?: string;
};

export default async function handler(
  req: ApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== "POST") {
    res.status(NOT_FOUND).end();
    return;
  }

  const data = req.body;

  try {
    await userRegSchema.validate(data);
    const id = await insertNewUser(data);
    const payload = { _id: id };
    const token = generateLoginToken(payload);

    setCookie({ res }, "token", token, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
      httpOnly: true,
    });
    res.status(OK).json({});
  } catch (error) {
    if (error instanceof AlreadyExistEmailError) {
      res
        .status(BAD_REQUEST)
        .json({ message: "이미 존재하는 ID(email) 입니다." });
    } else if (error instanceof ValidationError) {
      res.status(BAD_REQUEST).json({ message: error.errors[0] });
    } else {
      // eslint-disable-next-line no-console
      console.error(error);
      res.status(SERVER_ERROR).json({ message: "server error occured" });
    }
  }
}
