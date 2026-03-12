import Sequelize from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

export default async function (req, res, next) {
  try {
    const options = {
      dialect: 'postgres',
      host: process.env.DATABASE_HOST || 'localhost',
      port: process.env.DATABASE_PORT || 5432,
      username: process.env.DATABASE_USERNAME || 'root',
      password: process.env.DATABASE_PASSWORD || 'postgres',
      database: process.env.DATABASE_NAME || 'db_mini_app',
    }

    const sequelize = new Sequelize(options);
    await sequelize.authenticate();
  } catch (error) {
    throw new Error("Database can't connect...")
  } finally {
  }

  next()
};
