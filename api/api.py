from flask import Flask, jsonify
import requests
from flask_cors import CORS, cross_origin

app = Flask(__name__)
CORS(app)

@app.route('/hi/')
def say_hi():
    req = requests.get("https://dog.ceo/api/breeds/list/all")
    # jsonReq = req.content.decode('utf-8')
    return req.content
