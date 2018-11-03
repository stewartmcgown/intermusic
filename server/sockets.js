const start = httpServer => {
    const io = require("socket.io")(httpServer);

    io.on('connection', socket => {
        socket.emit('welcome user', {
            text: 'sup',
        });
    });
};

module.exports = start;
