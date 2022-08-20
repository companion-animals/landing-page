import mongoose from "mongoose";

interface UserModel extends UserRegFormData {
  createTime: Date;
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  birth: Date,
  password: String,
  sex: String,
  createTime: Date,
});

const User =
  (mongoose.models.User as mongoose.Model<UserModel>) ||
  mongoose.model<UserModel>("User", userSchema);

export default User;
