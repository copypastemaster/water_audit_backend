import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres://user:password@localhost:5434/database', {
  logging: false,
});

export default sequelize;
