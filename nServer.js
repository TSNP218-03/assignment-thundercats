var mongo = require('mongodb').MongoClient;
var client = require('socket.io').listen(10086).sockets;
var url = 'http://127.0.0.1:5000/api_all_result';
var url2 = 'http://127.0.0.1:5000/api_latest_result';

//connection to mongodb
mongo.connect('mongodb://127.0.0.1/', function(err,db){

	if(err){
		throw err;
	};

	console.log('mongo connected..');

	var dbo =db.db("test");

	//create collection of db
	dbo.createCollection("patients" , function(err, res){
			if(err){
			throw err;
		};

  	console.log("Collection created!");
    
  	//loop every 10 seconds
	setInterval (function(){

	 //generate random temperature 
	 var temperature = (Math.random()*(38.3-36.1)+36.1).toFixed(1);
	 //generate current date
	 var date = new Date().toLocaleString();

	 console.log(date); 
	 console.log(temperature);

	 //insert to database
	 dbo.collection("patients").insertOne({temperature: temperature, date: date},function(err,res){
	 	if(err){
		throw err;
	};
	 	console.log("One record saved!");
  	});
		 
	}, 10000);

	});


});

client.on('connection', function(socket){
	console.log("client connected");

	//listen on client
	socket.on('req_api_all', function(){
		console.log("client request api");
		socket.emit('res_api_all', url);
	})
	//listen on client
	socket.on('req_api_limit', function(){
		console.log("client request api");
		socket.emit('res_api_limit', url2);
	})
	//when client disconnect
	socket.on('disconnect',function(){
  	console.log("client disconnected");
  	});
})
