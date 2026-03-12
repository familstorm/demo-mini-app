import dotenv from 'dotenv'

dotenv.config()

export default {
  secret: process.env.JWT_SECRET || 'dev_secret_key_change_me_in_production',
  expiredIn: process.env.JWT_EXPIRED_IN || '1d'
}
