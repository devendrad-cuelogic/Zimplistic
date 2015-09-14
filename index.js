var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

var redis = require('socket.io-redis');
io.adapter(redis({ host: 'localhost', port: 6379, key: 'rotimatic' }));

app.get('/dashboard', function(req, res){
  res.sendFile(__dirname + '/dashboard.html');
});

app.get('/rotimatic', function(req, res){
  res.sendFile(__dirname + '/rotimatic.html');
});

app.get('/mobile', function(req, res){
  res.sendFile(__dirname + '/mobile.html');
});


io.on('connection', function(socket){

  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });

  socket.on('status', function(status_data){
    socket.broadcast.emit('status', status_data);
  });

  socket.on('command', function(command_data){
    console.log('command_data =>', command_data);
    socket.broadcast.emit('command', command_data);
  });
});


http.listen(3000, function(){
  console.log('listening on localhost:3000');
});
