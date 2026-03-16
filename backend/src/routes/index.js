import express from 'express'

import userRouter from '../modules/user/user.router.js'
import authRouter from '../modules/auth/auth.router.js'
import translationRouter from '../modules/translation/translation.router.js'

const router = express.Router();
router.use('/users', userRouter)
router.use('/auth', authRouter)
router.use('/translations', translationRouter)

export default router
