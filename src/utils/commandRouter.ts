import menu from "../handlers/menu";
import help from "../handlers/help";
import pricing from "../handlers/pricing";
import agent from "../handlers/agent";
import { getOpenAIReply } from "./openaiClient";

const commandRouter = async (
  input: string,
  profileName?: string
): Promise<string> => {
  const text = input.trim().toLowerCase();

  if (["menu"].includes(text)) return menu(profileName);
  if (["help"].includes(text)) return help();
  if (["pricing"].includes(text)) return pricing();
  if (["agent"].includes(text)) return agent();

  return await getOpenAIReply(input, profileName);
};

export default commandRouter;
