const http = require('http');
const path = require('path');

const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);

require('./sockets')(io);



//static files
app.use(express.static(path.join(__dirname,'public')));

//starting server
server.listen(80, ()=>{

    console.log('server on port 80');

});