var net = require('net');
var time = require('./strftime');

var server = net.createServer(function(socket){
  socket.write(getFecha());
  socket.end();
});

server.listen(process.argv[2]);

var getFecha = function(){
  return time('%F %R', new Date());
};
