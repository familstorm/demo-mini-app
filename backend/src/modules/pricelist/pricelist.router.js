import express from 'express'

import PriceListController from './pricelist.controller.js'

import { AuthGuard } from '../../middlewares/guard.middleware.js';
import { publicRouter } from '../../middlewares/public.router.js';
import validatorResultMidlleware from '../../middlewares/validatorResult.midlleware.js';

import createPricelistValidator from './validators/create-pricelist.validator.js';
import updatePricelistValidator from './validators/update-pricelist.validator.js';
import editableInlinePricelistValidator from './validators/editable-inline-pricelist.validator.js'

const router = express.Router();

// Api list
router.get('/',
  AuthGuard(PriceListController.list)
);

// Api detail by id
router.get('/:id',
  AuthGuard(PriceListController.detail)
);

// Api create
router.post('/',
  createPricelistValidator,
  validatorResultMidlleware,
  AuthGuard(PriceListController.create)
);

// Api update
router.post('/:id',
  updatePricelistValidator,
  validatorResultMidlleware,
  AuthGuard(PriceListController.update)
);

// Api update editable inline 
router.post('/:id/editable-inline',
  editableInlinePricelistValidator,
  validatorResultMidlleware,
  AuthGuard(PriceListController.editableInline)
);

// Api remove
router.delete('/:id', AuthGuard(PriceListController.remove));

export default router;
