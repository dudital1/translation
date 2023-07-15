import { Router } from "express";
import { TranslationRequestBody, TranslationResponse } from "./types";
import { translationController } from "../../controllers/translation/translation-controller";
import { checkCache } from "./middlewares/redis-cache";

const translationRouter = Router();

translationRouter.post<{}, TranslationResponse, TranslationRequestBody>(
  "/",
  checkCache,
  translationController.translateTextWithChatgpt
);

export default translationRouter;
