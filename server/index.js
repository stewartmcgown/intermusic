const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const { port } = require('./credentials');

// Get index.html file
const INDEX_HTML = path.join(__dirname, 'index.html');

// Start web sockets server
const sockets = require("./src/sockets");
sockets(server);

// Connect to database
require("./src/database");

// Create root endpoint to show server is up
app.get('/', (req, res) => {
    res.status(200).send(`Server is up right now at ${new Date().toJSON()} :D`);
});

app.get('/test', (req, res) => {
    res.sendFile(INDEX_HTML);
})

// Listen for connections
server.listen(port, () => console.log(`Server listening on port ${port}!`));