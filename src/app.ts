import express from "express";
import cors, { CorsOptions } from "cors";
import cookieParser from "cookie-parser";

const app = express();

const corsConfig: CorsOptions = {
  origin: process.env.CLIENT_URL || "*",
  credentials: true,
  methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
};

app.use(cors(corsConfig));
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

import userRouter from "./routes/user.route";

app.use("/api/v1/user", userRouter);

export { app };