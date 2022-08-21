import jwt from "jsonwebtoken";

const key = process.env.AUTH_PRIVATE_KEY;

export function generateLoginToken(payload: { _id: string }) {
  if (!key) {
    throw new Error("no secret key");
  }

  const token = jwt.sign(payload, key, {
    algorithm: "HS256",
    expiresIn: "30 days",
  });

  return token;
}

export function decodeLoginToken(token: string) {
  if (!key) {
    throw new Error("no secret key");
  }

  const decoded = jwt.verify(token, key) as {
    _id: string;
  };

  return decoded;
}
