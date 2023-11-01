import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./langs/en.json";
import fa from "./langs/fa.json";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  resources: {
    en: {
      translation: en,
    },
    fa: {
      translation: fa,
    },
  },
});

export default i18n;
