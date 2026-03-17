import { body } from 'express-validator'

const updateUnitValidator = [
  body('title')
    .optional({ nullable: true }),

  body('symbol')
    .optional({ nullable: true }),

  body('description')
    .optional({ nullable: true })
]

export default updateUnitValidator;
