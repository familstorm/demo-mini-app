import express from 'express'

import authMiddleware from '../middlewares/auth.js'
import userRouter from '../modules/user/user.router.js'

const router = express.Router();
router.use('/users', authMiddleware, userRouter)

export default router
