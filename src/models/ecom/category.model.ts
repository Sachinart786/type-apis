import mongoose, { Document, Model, Schema } from "mongoose";

export interface CategoryInterface extends Document {
  name: string;
}

const categorySchema = new Schema<CategoryInterface>(
  {
    name: {
      type: String,
    },
  },
  { timestamps: true }
);

export const Category: Model<CategoryInterface> =
  mongoose.model<CategoryInterface>("Category", categorySchema);
