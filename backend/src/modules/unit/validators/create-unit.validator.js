import { body } from 'express-validator'

const createUnitValidator = [
  body('title')
    .notEmpty()
    .withMessage('Email invalid'),
]

export default createUnitValidator;
