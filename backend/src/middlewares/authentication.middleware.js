import JwtConfig from '../configs/jwt.js';
import jwtUtil from '../utils/jwt.util.js';

const authenticate = (req, res, next) => {
  // Get Authorization Bearer and check
  const header = req.headers['authorization'];
  if (!header) {
    return res
      .status(401)
      .json({ message: "Unauthorized" })
  }
  const token = header && header.split(' ')[1];
  console.log(token);


  try {
    // Verify token 
    const payload = jwtUtil.verify(token, JwtConfig.secret)
    console.log(payload);
    req.user = payload

    next()
  } catch (error) {
    return res
      .status(401)
      .json({ message: "Token invalid" })
  }
}

export default authenticate;
