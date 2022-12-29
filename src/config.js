require('dotenv').config();

module.exports = {
    app: {
        PORT: process.env.PORT || 4000,
        DB_HOST : process.env.DB_HOST || "localhost",
        DB_USER : process.env.DB_USER || "root",
        DB_PASSWORD : process.env.DB_PASSWORD || "password",
        DB_NAME : process.env.DB_NAME || "panaderia",
        DB_PORT : process.env.DB_PORT || 3306
    },
    jwt: {
        secret: process.env.JWT_SECRET || 'mauri007'
    },

    mysql: {
        DB_HOST: process.env.MYSQL_HOST || 'localhost',
        DB_USER: process.env.MYSQL_USER || 'root',
        DB_PASSWORD: process.env.MYSQL_PASSWORD || '',
        DB_NAME: process.env.MYSQL_DATABASE || 'panaderia',
        DB_PORT: process.env.MYSQL_PORT || 3306

        // DB_HOST : process.env.DB_HOST || "localhost",
        // DB_USER : process.env.DB_USER || "root",
        // DB_PASSWORD : process.env.DB_PASSWORD || "password",
        // DB_NAME : process.env.DB_NAME || "panaderia",
        // DB_PORT : process.env.DB_PORT || 3310
    }
}
