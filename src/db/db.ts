import mongoose from "mongoose";

const CONNECTED_STATE_CODE = 1;

export async function connect() {
  const DB_URI = process.env.MONGODB_URI;
  if (!DB_URI) {
    throw new Error("no db uri");
  }

  const state = mongoose.connection.readyState;

  if (state === CONNECTED_STATE_CODE) {
    return;
  }

  await mongoose.connect(DB_URI, { dbName: "specialban" });
}
