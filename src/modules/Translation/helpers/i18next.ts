import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import HttpBackend, { HttpBackendOptions } from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';

i18n
  .use(HttpBackend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init<HttpBackendOptions>({
    backend: {
      loadPath: '/anime-portal/locales/{{lng}}/{{ns}}.json',
    },
    fallbackLng: 'en',
    ns: ['common', 'auth'],
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
