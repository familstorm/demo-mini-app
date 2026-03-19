import TranslationService from './translation.service.js';

const TranslationController = {
  list: async (req, res, next) => {
    const languageCode = req.params.code
    const result = await TranslationService.getTranslations(languageCode)
    console.log(result);

    res.json(result);
  },

  moduleTranslations: (req, res, next) => {
    const moduleStr = req.params.module

    console.log('module:', moduleStr);

    res.json({ login_title: 'Log In' });
  },

  createLocalization() {

  }
}

export default TranslationController;
