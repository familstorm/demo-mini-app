
import express from 'express'

import PriceListController from './pricelist.controller.js'
import { AuthGuard } from '../../middlewares/guard.middleware.js';
import { publicRouter } from '../../middlewares/public.router.js';


const router = express.Router();

router.get('/', AuthGuard(publicRouter(PriceListController.getAll)));
router.post('/', AuthGuard(PriceListController.create));
router.delete('/', AuthGuard(PriceListController.create));


export default router;
