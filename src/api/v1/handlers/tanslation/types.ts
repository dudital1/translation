import { ChatCompletionRequestMessage } from "openai";
import { OpenaiModelType } from "../../routes/translation/types";

export type ChatConfiguration = {
  model: OpenaiModelType;
  messages: ChatCompletionRequestMessage[];
  temperature: number;
  maxTokens: number;
};
