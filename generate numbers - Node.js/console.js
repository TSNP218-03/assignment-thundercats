var socket = io('http://localhost:10086');

//on(接收)server发来的object ， obj是一个object类型
socket.on('msg', function(obj){

//把obj里的data收进去array里面

var arrSeed=[obj.first,obj.second,obj.third];

//create一个<li>在html，然后把array里面的data放进<li>
for (var i=0; i<arrSeed.length; i++){
var oLi = document.getElementsByTagName("li")[i].innerHTML=arrSeed[i];
}

});

 