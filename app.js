var app = require('http').createServer(handler)
    , io = require('socket.io').listen(app)
    , fs = require('fs')
    , twitter = require('ntwitter')
    , util = require('util');
   
   
 //INIT TWITTER
 var twit = new twitter({
    consumer_key: '[YOUR_CONSUMER_KEY]',
    consumer_secret: '[YOUR_CONSUMER_SECRET]',
    access_token_key: '[YOUR_ACCESS_TOKEN_KEY]',
    access_token_secret:'[YOUR_ACCESS_TOKEN_SECRET]'
 });
  
  
  app.listen(8080);
function handler (req, res) {
	fs.readFile(__dirname + '/index.html',
 	function (err, data) {
 		if (err) {
        	res.writeHead(500);
        	return res.end('Error loading index.html');
      	}
  
      	res.writeHead(200);
     	res.end(data);
	});
}
  
 io.sockets.on('connection', function(socket) {
 	twit.stream('statuses/filter', {'track': 'stagiaire'},
		function(stream) {
			stream.on('data',function(data){
			socket.emit('twitter',data);
		});
	});
 });