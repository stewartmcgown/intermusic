const express = require('express');
const app = express();
const server = require('http').Server(app);
const { port } = require('./credentials');

// Start web sockets server
const sockets = require("./sockets");
sockets(server);

// Connect to database
require("./database");

// Create root endpoint to show server is up
app.get('/', (req, res) => {
    res.status(200).send(`Server is up right now at ${new Date().toJSON()} :D`);
});

// Listen for connections
server.listen(port, () => console.log(`Server listening on port ${port}!`));