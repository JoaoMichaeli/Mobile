import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import { getLocales, getCalendars } from 'expo-localization';

import commonPT from "../locales/pt/common";
import commonEN from "../locales/en/common";

const resources = {
  pt: {
    common: commonPT
  },
  en: {
    common: commonEN
  }
}

const detectLanguage = () => {
  const locales = getLocales();
  return locales[0].languageCode || 'en';
}


i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: detectLanguage(),
    fallbackLng: 'en',
    defaultNS: 'common'
  })


export default i18n;

