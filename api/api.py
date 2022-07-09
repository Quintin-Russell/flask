from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/hi')
def say_hi():
    resp = Flask.Response({"message": "sup stoker"})
    resp.headers['Access-Control-Allow-Origin'] = '*'
    return jsonify(resp)
