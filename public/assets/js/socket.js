var socket = io();

socket.on('connect', function() {
  console.log("Connected to server");
});

socket.on('disconnect', function() {
  console.log("Disconnected from server");
});

socket.on('newMessage', function(message) {
  console.log("New Message", message);
  var li = $('<li></li>');
  li.text(message.from + " : " + message.text);

  $('#messages').append(li);
});

socket.emit('createMessage', {
  from: "Frank",
  text: "Hi"
}, function(data) {
  console.log("Got it", data);
});

$('#message-form').on('submit', function(el) {
  el.preventDefault();

  var messageTextbox = $('[name=message]');

  socket.emit('createMessage', {
    from: "User",
    text: messageTextbox.val()
  }, function() {
    messageTextbox.val('');
  })
});
