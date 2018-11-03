require('dotenv').config();

const environment = process.env.NODE_ENV;
console.log(`Running in environment: ${environment}`);

if (!process.env.DB_USER) {
    console.warn('Whoops, could not find DB_USER in environment variables. Make sure you have them all set!');
}

if (!process.env.AWS_ACCESS_KEY) {
    console.warn('Whoops, could not find AWS_ACCESS_KEY in environment variables. Make sure you have them all set!');
}

module.exports = {
    mongodb: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
    },
    aws: {
        accessKey: process.env.AWS_ACCESS_KEY,
        secretKey: process.env.AWS_SECRET_KEY
    }
}
