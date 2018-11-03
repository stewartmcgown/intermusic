// Get MongoDB library and schemas
const mongoose = require("mongoose");
const { Project, Track } = require("./schemas");

// Get credentials for database
const mongodb = require("./credentials");
const { host, user, password } = mongodb;

// Connect to the database
mongoose.connect(`mongodb://${user}:${password}@${host}`, {
    useNewUrlParser: true
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, '*mongodb cries*'));
db.once('open', () => {
    console.log('==> *MongoDB salutes*');
});  