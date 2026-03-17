import { body } from 'express-validator'

const createPricelistValidator = [
  body('articleNo')
    .notEmpty().withMessage('Article No is not empty')
    .isNumeric().withMessage('Article No is must numeric'),

  body('name')
    .notEmpty().withMessage('Product is not empty')
    .isString().withMessage('Product is must string')
    .trim(),

  body('inPrice')
    .notEmpty().withMessage('In Price is not empty')
    .isDecimal().withMessage('In Price is must decimal')
    .custom((value) => value >= 0).withMessage('In Price greater than 0'),

  body('price')
    .notEmpty().withMessage('Price is not empty')
    .isDecimal().withMessage('Price is must decimal')
    .custom((value) => value >= 0).withMessage('Price greater than 0'),

  body('inStock')
    .optional()
    .isInt({ min: 0 }).withMessage('In Stock is integer and greater than 0'),

  body('description')
    .optional()
    .isString().withMessage('Description is must text'),

  body('unitId')
    .notEmpty().withMessage('Unit is not empty')
    .isInt().withMessage('Unit is must integer'),
]

export default createPricelistValidator;



