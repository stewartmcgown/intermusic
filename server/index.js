const express = require('express');
const app = express();
const server = require('http').Server(app);
const port = process.env.PORT || 5000;

const sockets = require("./sockets");
sockets(server);

app.get('/', (req, res) => {
    res.status(200).send('Server up: ', new Date());
});

server.listen(port, () => console.log(`Server listening on port ${port}!`));