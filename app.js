var app = require('http').createServer(handler)
  , io = require('socket.io').listen(app)
  , fs = require('fs')
  , twitter = require('ntwitter')
  , path = require('path')
  , config = require('./init/config')
  , auth = require('./init/twitter_auth');
   
   
 //INIT TWITTER
 var twit = new twitter({
    consumer_key: auth.consumer_key,
    consumer_secret: auth.consumer_secret,
    access_token_key: auth.access_token_key,
    access_token_secret: auth.access_token_secret
 });
  
  
app.listen(8080);

function handler (req, res) {
  var filePath = '.' + req.url;
  if (filePath == './') filePath = './view/index.html';
    
  var extname = path.extname(filePath);
  var contentType = 'text/html';
  switch (extname) {
    case '.js':
    contentType = 'text/javascript';
  break;
  case '.css':
    contentType = 'text/css';
  break;
  }
  
  fs.exists(filePath, function(exists) {
    if (exists) {
      fs.readFile(filePath, function(err, data) {
        if (err) {
          res.writeHead(500);
          res.end();
        }
        else {
          res.writeHead(200, { 'Content-Type': 'text/html' });
          res.end(data, 'utf-8');
        }
      });
     }
     else {
       res.writeHead(404);
       res.end();
     }
  });
}
  
io.sockets.on('connection', function(socket) {
 	twit.stream('statuses/filter', {'track': config.hashtag},
		function(stream) {
			stream.on('data',function(data){
			socket.emit('twitter',data);
		});
	});
});