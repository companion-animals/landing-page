// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { parseCookies } from "nookies";

import { OK, SERVER_ERROR } from "src/constatnts/networkStatus";
import { checkExistUser } from "src/db/auth";
import { decodeLoginToken } from "src/utils/jwt";

interface ApiRequest extends NextApiRequest {
  body: LoginData;
}

type Data = {
  isLogin?: boolean;
  message?: string;
};

export default async function handler(
  req: ApiRequest,
  res: NextApiResponse<Data>,
) {
  let isLogin = false;

  try {
    const cookies = parseCookies({ req });
    const { token } = cookies;
    if (token) {
      const decoded = decodeLoginToken(token);
      const isExistUserID = await checkExistUser(decoded._id);
      isLogin = isExistUserID;
    }

    res.status(OK).json({ isLogin });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    res.status(SERVER_ERROR).json({ message: "server error occured" });
  }
}
