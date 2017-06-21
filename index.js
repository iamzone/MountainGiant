var http = require('http');
var port = Math.round((1+Math.random())*1000);
http.createServer(function(req,res){
	res.writeHead(200,{'Content-Type':'text/plain'});
	res.end('hello world\n');
}).listen(port,'127.0.0.1');

console.log('http server listen on '+ port);