const start = httpServer => {
    const io = require("socket.io")(httpServer);

    io.on('connection', socket => {
        console.log('Client connected');

        socket.emit('welcome user', {
            text: 'sup',
        });

        socket.on('disconnect', () => {
            console.log('Client disconnected');
        })

        setInterval(() => {
            io.emit('time', new Date().toTimeString())
        }, 1000);
    });
};

module.exports = start;
