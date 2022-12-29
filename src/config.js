require('dotenv').config();

module.exports = {
    app:{
        port: process.env.PORT || 4000,
    },
    jwt:{
        secret: process.env.JWT_SECRET || 'mauri007'
    },

    mysql:{
        DB_HOST: process.env.MYSQL_HOST || 'localhost',
        DB_USER: process.env.MYSQL_USER || 'root',
        DB_PASSWORD: process.env.MYSQL_PASSWORD || '',
        DB_NAME: process.env.MYSQL_DATABASE || 'panaderia',
        DB_PORT: process.env.MYSQL_PORT || 3306
    }
}
    