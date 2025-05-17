import fs from "fs";

export function getTranslation(lang: string, key: string): string {
  try {
    const file = fs.readFileSync(`./locales/${lang}.json`, "utf8");
    const messages = JSON.parse(file);
    return messages[key] || key;
  } catch {
    return key;
  }
}
