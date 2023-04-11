import dotenv from 'dotenv';
dotenv.config();

const config = {
  nodeEnv: process.env.NODE_ENV,
  dbUrl: process.env.DB_URL
}

export default config;
