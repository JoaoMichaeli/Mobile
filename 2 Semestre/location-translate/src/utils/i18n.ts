import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import * as Localization from "expo-localization";

const resources = {
  pt: { translation: { counter: "Contador", increase: "Aumentar", decrease: "Diminuir", language: "English" } },
  en: { translation: { counter: "Counter", increase: "Increase", decrease: "Decrease", language: "Português" } },
};

// Pega o idioma padrão
const locales = Localization.getLocales();
const defaultLang = locales[0].languageTag.startsWith("pt") ? "pt" : "en";

i18n.use(initReactI18next).init({
  resources,
  lng: defaultLang,
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
