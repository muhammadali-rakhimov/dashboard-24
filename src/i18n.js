import i18n from "i18next";
import detector from "i18next-browser-languagedetector";
import { reactI18nextModule } from "react-i18next";

import translationRS from './locales/rs/translation.json';
import translationUZ from './locales/uz/translation.json';
import translationENG from './locales/en/translation.json';

//translations
const resources = {
   rs: {
    translation: translationRS
  },
   uz: {
    translation: translationUZ
  },
   eng: {
    translation: translationENG
  }
};

i18n
  .use(detector)
  .use(reactI18nextModule) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "uz",
    fallbackLng: "uz", // use en if detected lng is not available

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;