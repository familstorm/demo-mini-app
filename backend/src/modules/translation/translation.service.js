import LanguageEntity from './entities/language.entity.js'
import LocalizationEntity from './entities/localization.entity.js'

const getLanguage = async (code) => {
  try {
    const selete = ['id', 'code', 'title']
    const language = await (await LanguageEntity.findOne({
      attributes: selete,
      where: { code },
    })).dataValues
    return language
  } catch (error) {
    return {}
  }
}

const getTranslation = async (languageId) => {
  try {
    const selete = ['key', 'value', 'languageId']
    const translations = await LocalizationEntity.findAll({
      attributes: selete,
      where: { languageId },
      raw: true
    })

    const trans = {}
    for (const i of translations) {
      trans[i.key] = i.value
    }
    return trans
  } catch (error) {
    console.log('errors', error);
    return {}
  }
}

const getTranslations = async (code) => {
  try {
    let language = await getLanguage(code)
    console.log('language:', language);

    if (language?.code == undefined) {
      language = await getLanguage('en')
    }
    const result = await getTranslation(language.id)
    console.log('result', result);
    return result
  } catch (error) {
    console.log('errors', error);
    return {}
  }
}

export default {
  getLanguage,
  getTranslation,
  getTranslations
};
