import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import EN from './en/translation.json';
import KO from './ko/translation.json';

const resources = {
  en: { translation: EN },
  ko: { translation: KO },
};

i18n.use(initReactI18next).init({
  resources,
  lng: localStorage.getItem('language') ?? window.navigator.language ?? 'en',
  fallbackLng: 'en',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
