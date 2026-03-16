
import express from 'express'

import userController from './user.controller.js'
import { AuthGuard } from '../../middlewares/guard.middleware.js';
import { publicRouter } from '../../middlewares/public.router.js';


const router = express.Router();

router.get('/', AuthGuard(publicRouter(userController.getAll)));
router.get('/create', AuthGuard(userController.create));

export default router;
