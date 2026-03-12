import bcrypt from 'bcryptjs';

export default {
  generateHash: (password) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash
  },
  verifyHash: (password) => {
    return bcrypt.compareSync(password, hash);
  }
}
