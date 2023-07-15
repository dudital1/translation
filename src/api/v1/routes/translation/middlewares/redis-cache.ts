import { NextFunction, Request, Response } from "express";
import { client } from "../../../../../app";
import { generateRedisKey } from "../../../controllers/translation/utils";

export const checkCache = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { textToTranslate, targetLanguage } = req.body;
  const redisKey = generateRedisKey(textToTranslate, targetLanguage);

  const cachedValue = await client.get(redisKey);
  if (cachedValue !== null) {
    res.json({ translatedText: cachedValue });
  } else {
    next();
  }
};
