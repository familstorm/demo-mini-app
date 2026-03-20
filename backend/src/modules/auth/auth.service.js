import hashUtil from '../../utils/hash.util.js';
import jwtUtil from '../../utils/jwt.util.js';
import { UserDto } from '../user/dto/user.dto.js';
import UserService from '../user/user.service.js';
import JwtConfig from '../../configs/jwt.js';

const AuthService = {
  loginUser: async (data) => {
    const dto = new UserDto(data)
    try {
      const user = await UserService.getByEmail(dto.email)

      if (!user)
        return { status: false, message: 'Email or password is wrong' }

      const valid = hashUtil.verifyHash(dto.password, user.passwordHash)
      if (!valid)
        return { status: false, message: 'Email or password is wrong' }

      const token = await jwtUtil.sign(
        { id: user.id, email: user.email },
        JwtConfig.secret,
        JwtConfig.expiredIn
      )

      console.log(JwtConfig.secret,
        JwtConfig.expiredIn);


      return { status: true, token, message: 'Login success' }
    } catch (error) {
      return { status: true, message: 'Email or password is wrong' }
    }
  },
}

export default AuthService;
