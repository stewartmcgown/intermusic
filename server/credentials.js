require('dotenv').config();

console.log(process.env.DB_USER);

module.exports = {
    mongodb: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    },
    aws: {

    }
}
