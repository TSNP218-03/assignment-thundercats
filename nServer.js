const mongo = require('mongodb').MongoClient;
const client = require('socket.io').listen(10086).sockets;

mongo.connect('mongodb://127.0.0.1/', function(err,db){

	if(err){
		throw err;
	};

	console.log('mongo connected..');


	let dbo =db.db("test");

	dbo.createCollection("patients" , function(err, res){
			if(err){
			throw err;
		};

  console.log("Collection created!");
    

	setInterval (function(){

		 
	 let temperature = (Math.random()*(38.3-36.1)+36.1).toFixed(1);
	 
		 
	 console.log(temperature);

	 dbo.collection("patients").insertOne({temperature: temperature},function(err,res){
	 	if(err){
		throw err;
	};
	 	console.log("save record");
  	});
		 
	}, 5000);

	});


});


