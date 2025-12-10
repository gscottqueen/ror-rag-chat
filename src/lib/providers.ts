import { createOpenAICompatible } from "@ai-sdk/openai-compatible";
import { generateText } from "ai";

// Ollama provider (runs on port 11434)
export const local = createOpenAICompatible({
  name: "local",
  baseURL:
    process.env.AI_LOCAL_LLM_URL || "http://host.docker.internal:11434/v1",
});

// Function to get the local model
export const getLocalModel = (modelName: string) => {
  return local(modelName);
};

// Function for non-streaming local LLM calls
export const askLocalLLMQuestion = async (
  input: string,
  modelName: string = "",
) => {
  const model = getLocalModel(modelName);
  const { text } = await generateText({
    model,
    prompt: input,
    maxRetries: 0,
  });

  return text;
};
