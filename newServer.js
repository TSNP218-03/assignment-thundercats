const mongo = require('mongodb').MongoClient;
const client = require('socket.io').listen(10086).sockets;


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

		 
	 let temperature = (Math.random()*(38.3-36.1)+36.1).toFixed(1);
	 
		 
	 console.log(temperature);

	 dbo.collection("patients").insertOne({temperature: temperature},function(err,res){
	 	if(err){
		throw err;
	};
	 	console.log("done");
  	});
		 
	 }, 5000);




  	 


//db.close();
	});



	 

	 

	//setInterval (function(){

		//let patiendId = num++;
	//	let temperature = (Math.random()*(38.3-36.1)+36.1).toFixed(1);
		//let date = new Date().toLocaleString();
		//	console.log(patiendId);
	//		console.log(temperature);
		//	console.log(date);
	//}, 10000);


	// client.on('connection', function(socket){
	// 	let patient=db.collection('patient');

	// 	sendStatus = function(s){
	// 		socket.emit('status',s);
	// 	}


		//socket.emit('output', res);
		//setInterval (function(){
		//let temperature = Math.floor(Math.random()*38.3+36.1);
		//}, 10000)
		//let temperature = 
		//console.log(temperature);
	});
//});

