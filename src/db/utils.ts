import mongoose from "mongoose";

export function generateObjectID(id: string | mongoose.Types.ObjectId) {
  if (typeof id === "string") {
    return new mongoose.Types.ObjectId(id);
  }

  return id;
}
