import express from 'express'

import userRouter from '../modules/user/user.router.js'
import authRouter from '../modules/auth/auth.router.js'
import unitRouter from '../modules/unit/unit.router.js'
import pricelistRouter from '../modules/pricelist/pricelist.router.js'
import translationRouter from '../modules/translation/translation.router.js'

const router = express.Router();
router.use('/users', userRouter)
router.use('/auth', authRouter)
router.use('/unit', unitRouter)
router.use('/pricelist', pricelistRouter)
router.use('/translations', translationRouter)

export default router
