import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import {en, vi} from './trans';
export enum LanguageKey {
  EN = 'en',
  VI = 'vi',
}
export enum resourcesKey {
  homeHeaderTitle = 'HOME_TITLE',
  agents = 'AGENTS',
  weapons = 'WEAPONS',
  ranks = 'RANKS',
  sprays = 'SPRAYS',
  playerCards = 'PLAYER_CARDS',
  maps = 'MAPS',
  gunbuddies = 'GUN_BUDDIES',
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
  lng: LanguageKey.VI,
  fallbackLng: LanguageKey.EN,
  interpolation: {
    escapeValue: false,
  },
  compatibilityJSON: 'v3',
  resources,
});
export default i18next;
