$(document).ready(function() {
				
				//Function to wrap text, to back to the line
				function wrapText(context, text, x, y, maxWidth, lineHeight) {
			    	var words = text.split(' ');
			        var line = '';
			
			        for(var n = 0; n < words.length; n++) {
			          var testLine = line + words[n] + ' ';
			          var metrics = context.measureText(testLine);
			          var testWidth = metrics.width;
			          if (testWidth > maxWidth && n > 0) {
			            context.fillText(line, x, y);
			            line = words[n] + ' ';
			            y += lineHeight;
			          }
			          else {
			            line = testLine;
			          }
			        }
			        context.fillText(line, x, y);
			    }
			
				var $container = $('div.tweets'),
					socket = io.connect('http://localhost:8080');
					
		 
			    socket.on('twitter', function(data) {
			    	console.debug(data);
			    	$('.tweets').prepend('<canvas class="event" id="' + data.user.screen_name + '" style="background-color:#F7F7F7; border-bottom:1px solid #222222;" width="180" height="180px"></canvas>');
			    	
			    	var canvas = document.getElementById( data.user.screen_name );
			    	var ctx = canvas.getContext("2d");
			    	
			    	//INIT TEXT CANVAS USER NAME
			    	ctx.font = "20px Calibri";
			    	ctx.fillStyle = "000000";
			    	ctx.textAlign = "center";
					ctx.fillText( data.user.screen_name , canvas.width/2, canvas.height - 50); 
					
					//INIT TEXT CANVAS USER TEXT TWEET
					var maxWidth = canvas.width;
					var lineHeight = 10;
					var x = (canvas.width) / 2;
					var y = canvas.height - 35;
					var text = data.text;

					ctx.font = "10px Calibri";
					ctx.fillStyle = "000000";
					ctx.textAlign = "center";
					 
					wrapText(ctx, text, x, y, maxWidth, lineHeight);
					
					//INIT IMAGE CANVAS
					var imageObj = new Image();
				    imageObj.onload = function()
					{
					    ctx.save();
					    
					    var centerX = canvas.width / 2;
					    var radius = 50;
					    var centerY = radius + 10;
						
						ctx.beginPath();
					    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
					    ctx.fillStyle = '#000000';
					    ctx.fill();
					    ctx.lineWidth = 5;
					    ctx.strokeStyle = '#000000';
					    ctx.stroke();
					    ctx.clip();
					    
					    ctx.drawImage(imageObj, 0, 0, imageObj.width * 3, imageObj.height * 3);
					};
					
				    imageObj.src = data.user.profile_image_url;
			    });
			});