import {
  convertToModelMessages,
  type LanguageModel,
  streamText,
  type UIMessage,
} from "ai";
import { getLocalModel } from "@/lib/providers";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const {
    messages,
    model,
    local,
  }: {
    messages: UIMessage[];
    model: string;
    local: boolean;
  } = await req.json();

  let resolvedModel: string | LanguageModel;

  if (local) {
    resolvedModel = getLocalModel(model);
  } else {
    resolvedModel = model;
  }

  const result = streamText({
    model: resolvedModel,
    messages: convertToModelMessages(messages),
    system:
      "You are a helpful assistant that can answer questions and help with tasks",
  });

  // send sources and reasoning back to the client
  return result.toUIMessageStreamResponse({
    sendSources: true,
    sendReasoning: true,
  });
}
