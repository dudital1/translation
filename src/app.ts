import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";
import * as middlewares from "./middlewares/http-errors-middlewares";
import api from "./api";
import dotenv from "dotenv";

// .env
dotenv.config();

// create express app
const app = express();

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
