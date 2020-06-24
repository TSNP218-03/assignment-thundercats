var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(10086);

io.on('connection', function(socket){
	console.log('client connected');


//每一秒执行一次
setInterval (function(){

	//Math.random的output是Float类型，所以用parseInt把他转成Integer
	var ranSeed1=parseInt(Math.random()*99);
	var ranSeed2=parseInt(Math.random()*99);
	var ranSeed3=parseInt(Math.random()*99);


	//如果console.html连接server后，emit(发出)一个object给console.html

	socket.emit('msg',{first:ranSeed1,second:ranSeed2,third:ranSeed3});

	console.log("sending to console page");
	
	}, 1000);
	

//socket.on('disconnect', function(){
//	socket.disconnect();
//	});

});

 

