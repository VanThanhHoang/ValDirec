import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {en, vi} from './trans';
export enum LanguageKey {
  EN = 'en',
  VI = 'vi',
}
export enum resourcesKey {
  homeHeaderTitle = 'home_header_title',
}
const resources = {
  [LanguageKey.EN]: {
    translation: en,
  },
  [LanguageKey.VI]: {
    translation: vi,
  },
};
i18next.use(initReactI18next).init({
  lng: LanguageKey.EN,
  fallbackLng: LanguageKey.EN,
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: 'v3',
  resources,
});
export default i18next;
