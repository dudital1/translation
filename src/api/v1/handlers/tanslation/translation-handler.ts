import { OpenAIApi } from "openai";
import {
  createChat,
  generateOpenaiApi,
  getBasicTranslationConfiguration,
} from "./utils";

export const translationHandler = {
  async translateTextWithChatgpt(
    textToTranslate: string,
    targetLanguage: string
  ): Promise<string> {
    const openaiApi: OpenAIApi = generateOpenaiApi();

    const { messages, model, temperature, maxTokens } =
      getBasicTranslationConfiguration(textToTranslate, targetLanguage);

    const completion = await createChat(
      openaiApi,
      model,
      messages,
      temperature,
      maxTokens
    );

    const translatedText = completion.data.choices[0].message?.content;
    return translatedText ?? "";
  },
};
