const client = require('socket.io').listen(10086).sockets;
const request = require('request');

const url = 'http://127.0.0.1:5000/api';
request(url, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        console.log(body); 
    }
});