import express from 'express'

import { AuthGuard } from '../../middlewares/guard.middleware.js';
import { publicRouter } from '../../middlewares/public.router.js';
import ParamsValidator from './validators/params.validator.js';
import TranslationController from './translation.controller.js';

const router = express.Router();

router.get('/:code', ParamsValidator, AuthGuard(publicRouter(TranslationController.list)));

router.get('/:module', TranslationController.moduleTranslations)


router.get('/curd',)
router.post('/curd',)

export default router;
