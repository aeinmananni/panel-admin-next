import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpBackend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

i18next
  .use(initReactI18next) 
  .use(HttpBackend)
  .use(LanguageDetector)
  .init({
    fallbackLng: "fa",
    supportedLngs: ["en", "fa", "ar"],
    backend: {
      loadPath: "/locales/{{lng}}/{{ns}}.json",
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18next;
