require('dotenv').config();

module.exports = {
    app:{
        port: process.env.PORT || 4000,
    },
    jwt:{
        secret: process.env.JWT_SECRET || 'mauri007'
    },

    mysql:{
        host: process.env.MYSQL_HOST || 'localhost',
        user: process.env.MYSQL_USER || 'root',
        password: process.env.MYSQL_PASSWORD || 'password',
        database: process.env.MYSQL_DATABASE || 'panaderia',
        port: process.env.MYSQL_PORT || 3306

        // host: process.env.DB_HOST || 'localhost',
        // user: process.env.DB_USER || 'root',
        // password: process.env.DB_PASSWORD || '',
        // database: process.env.DB_DATABASE || 'panaderia',
        // port: process.env.DB_PORT || 3306
    }
}
    