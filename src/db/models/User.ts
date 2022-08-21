/* eslint-disable func-names */
import crypto from "crypto";

import mongoose from "mongoose";

interface UserModel {
  name: string;
  email: string;
  birth: Date;
  passwordHash: string;
  salt: string;
  sex: string;
  createTime: Date;
  setPassword: (password: string) => void;
  validPassword: (password: string) => boolean;
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  birth: Date,
  passwordHash: String,
  salt: String,
  sex: String,
  createTime: Date,
});

userSchema.methods.setPassword = function (password: string) {
  this.salt = crypto.randomBytes(16).toString("hex");
  this.passwordHash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
    .toString(`hex`);
};

userSchema.methods.validPassword = function (password: string) {
  const hash = crypto
    .pbkdf2Sync(password, this.salt, 1000, 64, `sha512`)
    .toString(`hex`);
  return this.passwordHash === hash;
};

const User =
  (mongoose.models.User as mongoose.Model<UserModel>) ||
  mongoose.model<UserModel>("User", userSchema);

export default User;
