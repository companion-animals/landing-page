import { AlreadyExistEmailError } from "src/errors/authErrors";

import { connect } from "./db";
import User from "./models/User";

export async function insertNewUser(user: UserRegFormData) {
  await connect();

  const isAlreadyExistID = await checkIsAlreadyExistEmail(user.email);
  if (isAlreadyExistID) {
    throw new AlreadyExistEmailError();
  }

  const userDoc = new User({ ...user, createTime: new Date() });
  await userDoc.save();
}

async function checkIsAlreadyExistEmail(email: string) {
  const result = await User.exists({ email });

  return !!result;
}
