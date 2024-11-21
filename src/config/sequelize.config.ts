require('dotenv').config({ path: ".env.dev" });

const Sequelize = require("sequelize");
const env = require('./database.config.js');

// Using the development configuration
const config = env.development; 

export const sequelize = new Sequelize(
  config.database, 
  config.username, 
  config.password, {
    host: config.host,
    dialect: config.dialect,
    logging: false, 
    port: 5434,
});

sequelize.sync({ force: false }).then(() => {
  console.log('Database synced!');
}).catch((err: any) => {
  console.error('Error syncing database:', err);
});
