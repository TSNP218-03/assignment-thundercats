This is README.MD

How to run :

First, download or clone to this repository.

Next install these three things:
1. NodeJs
2. MongoDB
3. Python

For Nodejs:
After downloaded and installed, open up the NodeJS directory and drag the "js" folder and "admin_cosole.html", "nServer.js", "socket.io.js" into it directory.
Next we will need to install the module to run the nodejs file.
Open the CMD and cd to the NodeJS directory.

-->Just type into cmd "npm install socket.io --save" and "npm install mongodb --save" to install the module.


For python:
After downloaded and installed, open up the python directory and drag the "templates" folder and "flask_mongo_API.py" into it directory.
Next we will need to install the module to run the python file.
Open the CMD and cd to the Python directory.

-->Just type into cmd "pip install flask", "pip install Flask-Cors" and "pip install flask-pymongo" to install the module.


-->Once everything is installed, the first step to run is our server.

We need to open the cmd and cd to Nodejs directory and run the command "node nServer.js".

nServer.js is a server, which generate the random temperature between 36.1 ~ 38.3 and will store the data into database every 10second.


-->Next we can then run the python API file.

We need to open the new cmd and cd to Python directory and run the command "python flask_mongo_API.py".

In this python file, it contain 3 different route.

To access the first route, open the browser and type in "http://127.0.0.1:5000/api_all_result". In this route, it display all the data from database.

To access the second route, type in "http://127.0.0.1:5000/api_latest_result". In this route, it display last ten result.

To access the third route, type in "http://127.0.0.1:5000/" or "http://127.0.0.1:5000/real_time_chart". In this route, it has the real-time chart.


-->The last is to open our admin console page, just drag "admin_console.html" to the browser.

In this page, will have 2 button to make request to the API, and the API will response the data and display it to the table.


