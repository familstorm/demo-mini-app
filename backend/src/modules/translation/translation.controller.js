import TranslationService from './translation.service.js';

const TranslationController = {
  list: async (req, res, next) => {
    const languageCode = req.params.code
    const result = await TranslationService.getTranslations(languageCode)
    res.json(result);
  },

  moduleTranslations: (req, res, next) => {
    const moduleStr = req.params.module
    res.json({ login_title: 'Log In' });
  },

  createLocalization() {

  }
}

export default TranslationController;
