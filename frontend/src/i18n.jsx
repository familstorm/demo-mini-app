import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { loadTranslations } from './apiClient/translation'
import { Utils } from "./utils/storage"

export async function initI18n(lang) {
  const translation = await loadTranslations(lang)

  await i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
      resources: {
        [lang]: translation
      },
      lng: lang,
      interpolation: {
        escapeValue: false // react already safes from xss
      }
    });

  return i18n
}

export async function changeLanguage(lang) {
  const translation = await loadTranslations(lang)
  i18n.addResources(lang, translation)
  await i18n.changeLanguage(lang)
  Utils.setLocalStorage('lang', lang)
}
