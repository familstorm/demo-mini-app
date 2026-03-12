import bcrypt from 'bcryptjs';

export default {
  generateHash: async (password) => {
    const salt = bcrypt.genSaltSync(12);
    const hash = bcrypt.hashSync(password, salt);
    return hash
  },
  verifyHash: (password, hash) => {
    return bcrypt.compareSync(password, hash);
  }
}
