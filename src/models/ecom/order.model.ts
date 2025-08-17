import mongoose, { Document, Model, Schema } from "mongoose";

export interface OrderInterface extends Document {
  name: string;
}

const orderSchema = new Schema<OrderInterface>({}, { timestamps: true });

export const Order: Model<OrderInterface> = mongoose.model(
  "Order",
  orderSchema
);
