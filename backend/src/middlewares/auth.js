import jwt from 'jsonwebtoken'

const authenticate = (req, res, next) => {
  console.log('Auth Middleware');
  next()
}

export default authenticate;
