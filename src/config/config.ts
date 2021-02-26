require('dotenv').config();

export const config = {
  aws: {
    profile: process.env.AWS_PROFILE,
    region: process.env.AWS_REGION,
    mediaBucket: process.env.AWS_MEDIA_BUCKET,
  },
  db: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    storage: ':memory:'
  },
  env: process.env.APP_ENV
};