import dotenv from 'dotenv';
dotenv.config();

const env = {
  development: {
    dialect: process.env.POTGRES_DRIVER!,
    database: process.env.POSTGRES_DB!,
    username: process.env.POSTGRES_USER!,
    host: process.env.POSTGRES_HOST!,
    password: process.env.POSTGRES_PASSWORD!,
},
}

export default env;