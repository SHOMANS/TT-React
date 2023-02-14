import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../assets/langs/en.json';
import ar from '../assets/langs/ar.json';

const lang = localStorage.getItem('lang') || 'en';

i18n.use(initReactI18next).init({
  resources: { ...en, ...ar },
  lng: lang,
  fallbackLng: 'en',

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
