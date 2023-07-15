import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import * as middlewares from "./middlewares/http-errors-middlewares";
import api from "./api";
import dotenv from "dotenv";
import { createClient } from "redis";
const REDIS_PORT = 15204;

// .env
dotenv.config();

// create express app
const app = express();

// redis
export const client = createClient({
  password: `${process.env.REDIS_PASSWORD}`,
  socket: {
    host: process.env.REDIS_HOST,
    port: REDIS_PORT,
  },
});
client.on("error", (err: any) => console.log("Redis Client Error", err));
client.connect();

// middlewares
app.use(morgan("dev"));
app.use(helmet());
app.use(cors());
app.use(express.json());

// v1 router
app.use("/api", api);

// http errors middlewares
app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
