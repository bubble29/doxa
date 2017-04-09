const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const {generateMessage} = require('./utils/message');
const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log("New user connected");

  // Admin sends message to chat app
  socket.emit('newMessage', generateMessage('Admin', 'Welcome to the chat app'));

  // Admin sends message when user joins
  socket.broadcast.emit('newMessage', generateMessage('Admin', 'New user joined'));

  socket.on('createMessage', (message, callback) => {
    console.log('Create Message', message);
    io.emit('newMessage', generateMessage(message.from, message.text));
    callback("This is from the server");

    // Sends the message to everyone except the user who joins
    /*
     *socket.broadcast.emit('newMessage', {
     *  from: message.from,
     *  text: message.text,
     *  createAt: new Date().getTime()
     *});
     */
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from server');
  });
});

server.listen(port, () => {
  console.log('Server is up on ' + port);
});
