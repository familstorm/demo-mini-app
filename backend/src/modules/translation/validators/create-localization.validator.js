import { body } from 'express-validator'

const createLocalizationValidator = [
  body('email')
    .isEmail()
    .withMessage('Email invalid'),

  body('password')
    .notEmpty()
    .isLength({ min: 6, max: 32 })
    .withMessage('Password length must be between 8 and 32 characters')
]

export default createLocalizationValidator;
