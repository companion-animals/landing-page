import mongoose from "mongoose";

import {
  AlreadyExistEmailError,
  InvalidLoginDataError,
} from "src/errors/authErrors";

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

export async function checkLoginData({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const user = await User.findOne({ email }, { _id: 1, password: 1 });

  if (!user) {
    throw new InvalidLoginDataError();
  }

  // TODO: hash password check 으로 바뀌어야함
  const isValidPassword = user.password === password;

  if (!isValidPassword) {
    throw new InvalidLoginDataError();
  }

  return user;
}

export async function checkExistUser(id: string) {
  const result = await User.findById({ _id: new mongoose.Types.ObjectId(id) });

  return !!result;
}
