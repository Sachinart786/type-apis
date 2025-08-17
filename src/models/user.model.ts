import mongoose, { Document, Model, Schema } from "mongoose";

export interface UserInterface extends Document {
  name: string;
  age: number;
  gender: string;
  city: string;
}

const userSchema = new Schema<UserInterface>(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    age: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    city: {
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
