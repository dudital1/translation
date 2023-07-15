export type TranslationRequestBody = {
  textToTranslate: string;
  targetLanguage: string;
};

type TranslationSuccessResponse = {
  translatedText: string;
};

type TranslationFailedResponse = {
  error: string;
};

export enum OpenaiModelType {
  ChatGpt3Point5Turbo = "gpt-3.5-turbo",
  // ChatGpt4 = "gpt-4", // currently not working
  // TODO: add more models in the future
}

export type TranslationResponse =
  | TranslationSuccessResponse
  | TranslationFailedResponse;
