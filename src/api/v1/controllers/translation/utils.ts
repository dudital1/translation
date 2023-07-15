export const generateRedisKey = (
  textToTranslate: string,
  targetLanguage: string
) => {
  return textToTranslate + targetLanguage;
};
