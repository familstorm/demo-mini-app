import { body } from 'express-validator'

const editableInlinePricelistValidator = [
  body('field')
    .notEmpty()
    .withMessage('Field invalid'),

  body('value')
    .notEmpty()
    .withMessage('Field invalid')
]

export default editableInlinePricelistValidator;
