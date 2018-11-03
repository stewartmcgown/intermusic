const mongoose = require("mongoose");

const credentials = require("./credentials.json");
const { Project, Track } = require("./schemas");

const { host, user, password } = credentials.mongodb;

mongoose.connect(`mongodb://${user}:${password}@${host}`, {
    useNewUrlParser: true
});
const db = mongoose.connection;

db.on('error', console.error.bind(console, '*mongodb cries*'));
db.once('open', () => {
    console.log('==> *MongoDB salutes*');
});  