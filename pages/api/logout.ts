// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { destroyCookie } from "nookies";

import { OK, NOT_FOUND } from "src/constatnts/networkStatus";

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

  destroyCookie({ res }, "token", { path: "/" });

  res.status(OK).end();
}
