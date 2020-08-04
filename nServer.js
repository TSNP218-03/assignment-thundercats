var mongo = require('mongodb').MongoClient;
var client = require('socket.io').listen(10086).sockets;
var url = 'http://127.0.0.1:5000/api_all_result';
var url2 = 'http://127.0.0.1:5000/api_latest_result';

mongo.connect('mongodb://127.0.0.1/', function(err,db){

	if(err){
		throw err;
	};

	console.log('mongo connected..');

	var dbo =db.db("test");

	dbo.createCollection("patients" , function(err, res){
			if(err){
			throw err;
		};

  	console.log("Collection created!");
    

	setInterval (function(){
 
	 var temperature = (Math.random()*(38.3-36.1)+36.1).toFixed(1);
	 var date = new Date().toLocaleString();

	 console.log(date); 
	 console.log(temperature);

	 dbo.collection("patients").insertOne({temperature: temperature, date: date},function(err,res){
	 	if(err){
		throw err;
	};
	 	console.log("One record saved!");
  	});
		 
	}, 50000);

	});


});

client.on('connection', function(socket){
	console.log("client connected");

	socket.on('req_api_all', function(){
		console.log("client request api");
		socket.emit('res_api_all', url);
	})

	socket.on('req_api_limit', function(){
		console.log("client request api");
		socket.emit('res_api_limit', url2);
	})

	socket.on('disconnect',function(){
  	console.log("client disconnected");
  	});
})


