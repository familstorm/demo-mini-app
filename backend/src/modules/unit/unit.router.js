import express from 'express'

import unitController from './unit.controller.js'

import { AuthGuard } from '../../middlewares/guard.middleware.js';
import { publicRouter } from '../../middlewares/public.router.js';
import validatorResultMidlleware from '../../middlewares/validatorResult.midlleware.js';

import createUnitValidator from './validators/create-unit.validator.js';
import updateUnitValidator from './validators/update-unit.validator.js';

const router = express.Router();

// Api list
router.get('/',
  AuthGuard(publicRouter(unitController.list))
);

// Api detail by id
router.get('/:id',
  AuthGuard(unitController.detail)
);

// Api create
router.post('/',
  createUnitValidator,
  validatorResultMidlleware,
  AuthGuard(unitController.create)
);

// Api update
router.post('/:id',
  updateUnitValidator,
  validatorResultMidlleware,
  AuthGuard(unitController.update)
);

// Api remove
router.delete('/:id', AuthGuard(unitController.remove));

export default router;
