from flask import Flask, render_template, jsonify, request, url_for
from flask_cors import CORS
from flask_pymongo import PyMongo

app = Flask(__name__)
CORS(app)
app.config["MONGO_URI"] = "mongodb://localhost:27017/test"
mongo = PyMongo(app)


# run app
@app.route("/")
@app.route("/real_time_chart")
def real_time_chart_page():
    temperature = mongo.db.patients
    output = []
    for data in temperature.find():
        output.append({'temperature': data['temperature']})
    return render_template('index.html', output=output)


@app.route("/api_all_result", methods=['GET'])
def api_all_result_page():
    temperature = mongo.db.patients
    output = []
    for data in temperature.find():
        output.append({'temperature': data['temperature'], 'date': data['date']})
    return jsonify(output)


@app.route("/api_latest_result", methods=['GET'])
def api_latest_result_page():
    temperature = mongo.db.patients
    output = []
    for data in temperature.find().sort('date', -1).limit(10):
        output.append({'temperature': data['temperature'], 'date': data['date']})
    return jsonify(output)

if __name__ == "__main__":
    app.run(debug=True)
