import { Sequelize, Dialect } from 'sequelize';
import env from './database.config'; // Import the environment configuration

// Using the development configuration
const config = env.development; 

const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, {
    host: config.host,
    dialect: config.dialect as Dialect,
    logging: false, 
});

export default sequelize;
