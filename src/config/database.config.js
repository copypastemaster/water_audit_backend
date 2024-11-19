require("dotenv").config();

module.exports = {
    development: {
        dialect: 'postgres',
        database: process.env.POSTGRES_DB,
        username: process.env.POSTGRES_USER,
        host: process.env.POSTGRES_HOST,
        password: process.env.POSTGRES_PASSWORD,
        port: 5434
    },
    test: {
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: `${process.env.POSTGRES_DB}_test`,
        host: "localhost",
        dialect: "postgres"
    },
    production: {
        username: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        database: `${process.env.POSTGRES_DB}_prod`,
        host: "localhost",
        dialect: "postgres"
    }
}
