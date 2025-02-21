// locales/index.ts
import { createI18n } from 'next-international';

const locales = {
  en: () => import('./en'),
  fr: () => import('./fr'),
};

export const { useI18n, useScopedI18n, I18nProvider, getLocaleProps } = createI18n(locales);