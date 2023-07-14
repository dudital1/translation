import { Router } from "express";
import exampleRouter from "./routes/example-route";

const v1Router = Router();

v1Router.use("/example-route", exampleRouter);

export default v1Router;
