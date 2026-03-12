import express from 'express'

import userController from './user.controller.js'

const router = express.Router();

/* GET users listing. */
router.get('/', userController.getAll);
router.get('/create', userController.create);
router.get('/profile', userController.getProfile);


export default router;
