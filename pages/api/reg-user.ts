// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { ValidationError } from "yup";

import {
  OK,
  BAD_REQUEST,
  NOT_FOUND,
  SERVER_ERROR,
} from "src/constatnts/networkStatus";
import { insertNewUser } from "src/db/auth";
import { AlreadyExistEmailError } from "src/errors/authErrors";
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
    await insertNewUser(data);
    res.status(OK).end();
  } catch (error) {
    if (error instanceof AlreadyExistEmailError) {
      res
        .status(BAD_REQUEST)
        .json({ message: "이미 존재하는 ID(email) 입니다." });
    } else if (error instanceof ValidationError) {
      res.status(BAD_REQUEST).json({ message: error.errors[0] });
    } else {
      console.error(error);
      res.status(SERVER_ERROR).json({ message: "server error occured" });
    }
  }

  // wrong validation
  // res.status(BAD_REQUEST).json({ message: "이러이러한게 잘못 되었습니다" });

  // db insert
}
