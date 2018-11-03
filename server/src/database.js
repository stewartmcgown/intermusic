// Get MongoDB library and schemas
const mongoose = require("mongoose");
const { Project, Track } = require("./schemas");

// Get credentials for database
const { mongodb } = require("../credentials");
const { host, user, password } = mongodb;

if (!host) {
    console.error('database.js | Database host not found - exiting :(')
    return;
};

// Connect to the database
mongoose.connect(`mongodb://${user}:${password}@${host}`, {
    useNewUrlParser: true
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, '*MongoDB cries*'));
db.once('open', () => {
    console.log('==> *MongoDB salutes*');
});
