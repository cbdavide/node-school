var http = require('http');

var server = http.createServer(function(req,res) {
  req.on('data',function(data) {
    res.write(String(data).toUpperCase());
  });
});

server.listen(process.argv[2]);
