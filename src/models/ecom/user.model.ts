import mongoose, { Document, Model, Schema } from "mongoose";

export interface UserInterface extends Document {
  userName: string;
  email: string;
  password: string;
}

const userSchema = new Schema<UserInterface>(
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

export const User: Model<UserInterface> = mongoose.model<UserInterface>(
  "User",
  userSchema
);
