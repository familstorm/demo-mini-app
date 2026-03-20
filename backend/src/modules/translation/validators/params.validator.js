import { query } from 'express-validator'

const ParamsValidator = [
  query('lang')
    .notEmpty()
    .default('en')
    .withMessage('Language'),
]

export default ParamsValidator;
