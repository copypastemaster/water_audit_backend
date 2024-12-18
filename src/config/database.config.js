require("dotenv").config();

module.exports = {
    development: {
        dialect: process.env.POSTGRES_DRIVER,
        database: process.env.POSTGRES_DB,
        username: process.env.POSTGRES_USER,
        host: process.env.POSTGRES_HOST,
        password: process.env.POSTGRES_PASSWORD,
        port: process.env.POSTGRES_PORT || 5434,
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
