import { Router } from "express";
import { TranslationRequestBody, TranslationResponse } from "./types";
import { translationController } from "../../controllers/translation/translation-controller";

const translationRouter = Router();

translationRouter.post<{}, TranslationResponse, TranslationRequestBody>(
  "/",
  translationController.translateTextWithChatgpt
);

export default translationRouter;
