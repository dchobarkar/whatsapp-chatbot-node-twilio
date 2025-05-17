import menu from "../handlers/menu";
import help from "../handlers/help";
import pricing from "../handlers/pricing";
import agent from "../handlers/agent";
import { getOpenAIReply } from "./openaiClient";
import { getCatalogMessage } from "../handlers/catalog";

interface BotResponse {
  body: string;
  mediaUrl?: string;
}

const commandRouter = async (
  input: string,
  profileName?: string
): Promise<BotResponse> => {
  const text = input.trim().toLowerCase();

  if (["menu"].includes(text)) return { body: menu(profileName) };
  if (["help"].includes(text)) return { body: help() };
  if (["pricing"].includes(text)) return { body: pricing() };
  if (["agent"].includes(text)) return { body: agent() };
  if (["catalog"].includes(text)) return getCatalogMessage();

  const fallback = await getOpenAIReply(input, profileName);
  return { body: fallback };
};

export default commandRouter;
