from flask import Flask, render_template, jsonify
from flask_pymongo import PyMongo

app = Flask(__name__)
app.config["MONGO_URI"] = "mongodb://localhost:27017/test"
mongo = PyMongo(app)

#run app
@app.route("/Api", methods=['GET'])
def Api_page():
    temperature = mongo.db.patients
    output = []
    for data in temperature.find():
        output.append({'temperatutre' : data['temperature']})
    return jsonify({'result': output})

if __name__ == "__main__":
    app.run(debug=True)