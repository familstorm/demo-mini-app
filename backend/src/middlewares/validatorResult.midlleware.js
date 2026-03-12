import { validationResult } from 'express-validator'

export default function (req, res, next) {

  const result = validationResult(req)
  if (!result.isEmpty())
    return res
      .status(400)
      .json({
        message: 'Validation failed',
        errors: result.errors
      })

  next()
}
