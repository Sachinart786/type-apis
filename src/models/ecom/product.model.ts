import mongoose, { Document, Model, Schema } from "mongoose";

export interface ProductInterface extends Document {
  userName: string;
  email: string;
  password: string;
}

const productSchema = new Schema<ProductInterface>(
  {
    userName: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Product: Model<ProductInterface> =
  mongoose.model<ProductInterface>("Product", productSchema);
