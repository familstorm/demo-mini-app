import jwt from 'jsonwebtoken'

export default {
  verify: (token, secret) => {
    return jwt.verify(token, secret)
  },

  sign: (payload, secret, expiredIn) => {
    return jwt.sign({ data: payload }, secret, { expiresIn: expiredIn })
  }
}
