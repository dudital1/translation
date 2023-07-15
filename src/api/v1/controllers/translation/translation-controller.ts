import { Request, Response } from "express";
import {
  TranslationRequestBody,
  TranslationResponse,
} from "../../routes/translation/types";
import { translationHandler } from "../../handlers/tanslation/translation-handler";

export const translationController = {
  async translateTextWithChatgpt(
    req: Request, // TODO: fix request typing
    res: Response<TranslationResponse>
  ) {
    const { textToTranslate, targetLanguage } = req.body;
    try {
      const translatedText = await translationHandler.translateTextWithChatgpt(
        textToTranslate,
        targetLanguage
      );
      res.json({ translatedText: translatedText });
    } catch (error) {
      console.error(error);
      res.json({ error: "Something went wrong" });
    }
  },
};
