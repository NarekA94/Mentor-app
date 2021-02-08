import I18n from 'react-native-i18n';
import {getLocales} from 'react-native-localize';
import {Storage} from '../helpers';
import {welcomeAm, welcomeEn} from "./welcome/welcome"
import {DevSettings} from 'react-native';

I18n.fallbacks = true;

I18n.translations = {
  en: {
    ...welcomeEn,
  },
  hy: {
    ...welcomeAm,
  },
};
Storage.retrieveData('language').then((value) => {
  I18n.locale = !!value
    ? value
    : getLocales()[0].languageCode == 'hy'
    ? 'hy'
    : 'en';
});
export const translate = (text) => I18n.t(text);
export const changeLanguage = (lang) => {
  Storage.storeData('language', lang);
  DevSettings.reload();
};
export default I18n;
