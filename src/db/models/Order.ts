import mongoose from "mongoose";

export interface OrderModel {
  price: number;
  sitterName: string;
  sittingStartDate: Date;
  sittingEndDate: Date;
  animalCategory: string;
  animalName: string;
  userID: mongoose.Types.ObjectId;
  sitterPhoneNum: string;
  isPaid: boolean;
  tossPaymentResult: any;
}

const orderSchema = new mongoose.Schema({
  price: Number,
  sitterName: String,
  sittingStartDate: Date,
  sittingEndDate: Date,
  animalCategory: String,
  animalName: String,
  userID: mongoose.Schema.Types.ObjectId,
  sitterPhoneNum: String,
  isPaid: Boolean,
  tossPaymentResult: mongoose.Schema.Types.Mixed,
});

const Order =
  (mongoose.models.Order as mongoose.Model<OrderModel>) ||
  mongoose.model<OrderModel>("Order", orderSchema);

export default Order;
