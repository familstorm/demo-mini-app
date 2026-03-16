
import express from 'express'

import unitController from './unit.controller.js'
import { AuthGuard } from '../../middlewares/guard.middleware.js';
import { publicRouter } from '../../middlewares/public.router.js';


const router = express.Router();

router.get('/', AuthGuard(publicRouter(unitController.getAll)));
router.get('/create', AuthGuard(unitController.create));

export default router;
