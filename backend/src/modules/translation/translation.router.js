import express from 'express'

import { AuthGuard } from '../../middlewares/guard.middleware.js';
import { publicRouter } from '../../middlewares/public.router.js';
import ParamsValidator from './validators/params.validator.js';
import TranslationController from './translation.controller.js';
import LocalizationController from './localization.controller.js';

const router = express.Router();

router.get('/', ParamsValidator, AuthGuard(publicRouter(TranslationController.getAll)));

router.get('/curd',)
router.post('/curd',)

export default router;
