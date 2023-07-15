import { Router } from "express";
import translationRouter from "./routes/translation/translation-router";

const v1Router = Router();

v1Router.use("/translate", translationRouter);

export default v1Router;
