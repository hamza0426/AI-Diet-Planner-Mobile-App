import OpenAI from "openai";

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.EXPO_PUBLIC_OPENROUTER_API_KEY,
});

const AIMODELNAME = "openai/gpt-oss-20b:free";

export const CalculateCaloriesAI = async (PROMPT) =>
  await openai.chat.completions.create({
    model: AIMODELNAME,
    messages: [
      {
        role: "user",
        content: PROMPT,
      },
    ],
    response_fromat: "json_object",
  });

export const GenerateAIRecipe = async (PROMPT) =>
  await openai.chat.completions.create({
    model: AIMODELNAME,
    messages: [
      {
        role: "user",
        content: PROMPT,
      },
    ],
    response_fromat: "json_object",
  });

//   console.log(CalculateCaloriesAI.choices[0].message);
