import express from 'express'

import { AuthGuard } from '../../middlewares/guard.middleware.js';
import { publicRouter } from '../../middlewares/public.router.js';
import authController from './auth.controller.js';
import loginValidator from './validators/login.validator.js';
import validatorResultMidlleware from '../../middlewares/validatorResult.midlleware.js';


const router = express.Router();

router.post('/login', loginValidator, validatorResultMidlleware, AuthGuard(publicRouter(authController.login)));
router.post('/logout', AuthGuard(authController.logout))


export default router;
