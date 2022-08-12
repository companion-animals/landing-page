// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

import { OK, BAD_REQUEST } from "src/constatnts/networkStatus";

type Data = {
  message?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  if (req.method !== "POST") {
    res.status(404).end();
    return;
  }

  const data = req.body;
  console.log(data);

  // already exist
  // res.status(BAD_REQUEST).json({ message: "이미 존재하는 ID(email) 입니다." });

  // wrong validation
  // res.status(BAD_REQUEST).json({ message: "이러이러한게 잘못 되었습니다" });

  //

  res.status(OK);
}
