import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";
import { OpenaiModelType } from "../../routes/translation/types";
import { ChatConfiguration } from "./types";
const TRANSLATION_TEMPERATURE = 0.1;
const MAX_TOKENS = 100;

export const generateOpenaiApi = (): OpenAIApi => {
  const configuration = new Configuration({
    apiKey: process.env.SECRET_KEY,
    organization: process.env.ORGANIZATION_ID,
  });
  return new OpenAIApi(configuration);
};

export const getBasicTranslationConfiguration = (
  textToTranslate: string,
  targetLanguage: string
): ChatConfiguration => {
  return {
    model: OpenaiModelType.ChatGpt3Point5Turbo,
    messages: [
      {
        role: "system",
        content: `you will be provided with text, please translate it to ${targetLanguage}`,
      },
      {
        role: "user",
        content: textToTranslate,
      },
    ],
    temperature: TRANSLATION_TEMPERATURE,
    maxTokens: MAX_TOKENS,
  };
};

export const createChat = async (
  openaiApi: OpenAIApi,
  model: OpenaiModelType,
  messages: ChatCompletionRequestMessage[],
  temperature: number,
  max_tokens: number
) => {
  return await openaiApi.createChatCompletion({
    model: model,
    messages: messages,
    temperature: temperature,
    max_tokens: max_tokens,
  });
};
