import express from 'express'

import { AuthGuard } from '../../middlewares/guard.middleware.js';
import { publicRouter } from '../../middlewares/public.router.js';
import ParamsValidator from './validators/params.validator.js';
import TranslationController from './translation.controller.js';

const router = express.Router();

router.get('/', ParamsValidator, AuthGuard(publicRouter(TranslationController.getAll)));

export default router;
