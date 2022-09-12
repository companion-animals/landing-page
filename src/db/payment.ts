import mongoose from "mongoose";

import { connect } from "./db";
import Order from "./models/Order";

export async function getOrderByID(orderID: string) {
  await connect();

  const id = new mongoose.Types.ObjectId(orderID as string);
  const order = await Order.findById(id, { sitterPhoneNum: 0 }).exec();

  return order;
}
