import { enTranslations } from './en';
import { arTranslations } from './ar';
import { ruTranslations } from './ru';
import { zhTranslations } from './zh';

export type TranslationKey = 
  | keyof typeof enTranslations.header
  | keyof typeof enTranslations.hero
  | keyof typeof enTranslations.about
  | keyof typeof enTranslations.common;

export const translations = {
  en: enTranslations,
  ar: arTranslations,
  ru: ruTranslations,
  zh: zhTranslations
};
