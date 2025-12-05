import ru from "../../../locales/ru.json";
import en from "../../../locales/en.json";

export const resources = {
  ru: { translation: ru },
  en: { translation: en },
} as const;

export type AppResources = (typeof resources)["ru"];
