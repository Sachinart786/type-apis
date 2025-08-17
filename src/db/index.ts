import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  process.exit(1);
}

mongoose.connect(MONGODB_URI).catch(() => {
  process.exit(1);
});
