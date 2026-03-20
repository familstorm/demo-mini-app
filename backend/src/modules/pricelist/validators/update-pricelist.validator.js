import { body } from 'express-validator'

const updatePricelistValidator = [
  body('title')
    .optional({ nullable: true }),

  body('symbol')
    .optional({ nullable: true }),

  body('description')
    .optional({ nullable: true })
]

export default updatePricelistValidator;
