import menu from "../handlers/menu";
import help from "../handlers/help";
import pricing from "../handlers/pricing";
import agent from "../handlers/agent";
import fallback from "../handlers/fallback";

const commandRouter = (input: string, profileName?: string): string => {
  const text = input.trim().toLowerCase();

  if (["menu"].includes(text)) return menu(profileName);
  if (["help"].includes(text)) return help();
  if (["pricing"].includes(text)) return pricing();
  if (["agent"].includes(text)) return agent();

  return fallback();
};

export default commandRouter;
