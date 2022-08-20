// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { setCookie } from "nookies";

import {
  OK,
  NOT_FOUND,
  SERVER_ERROR,
  UNAUTHORIZED,
} from "src/constatnts/networkStatus";
import { checkLoginData } from "src/db/auth";
import { InvalidLoginDataError } from "src/errors/authErrors";
import { generateLoginToken } from "src/utils/jwt";

interface ApiRequest extends NextApiRequest {
  body: LoginData;
}

type Data = {
  message?: string;
};

export default async function handler(
  req: ApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== "POST") {
    res.status(NOT_FOUND).json({});
    return;
  }

  const data = req.body;

  try {
    const userData = await checkLoginData(data);
    const payload = { _id: userData._id.toString() };
    const token = generateLoginToken(payload);

    setCookie({ res }, "token", token, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/",
      httpOnly: true,
    });

    res.status(OK).json({});
  } catch (error) {
    if (error instanceof InvalidLoginDataError) {
      res
        .status(UNAUTHORIZED)
        .json({ message: "ID, 혹은 비밀번호를 확인해주세요" });
    } else {
      // eslint-disable-next-line no-console
      console.error(error);
      res.status(SERVER_ERROR).json({ message: "server error occured" });
    }
  }
}
