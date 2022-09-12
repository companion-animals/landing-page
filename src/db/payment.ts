import mongoose from "mongoose";

import { connect } from "./db";
import Order, { OrderModel } from "./models/Order";

export async function getOrderByID(
  orderID: string,
  projection?: mongoose.ProjectionType<OrderModel>,
) {
  await connect();

  const id = new mongoose.Types.ObjectId(orderID as string);
  const order = await Order.findById(id, projection).exec();

  return order;
}
