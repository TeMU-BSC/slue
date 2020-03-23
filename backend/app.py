from flask import Flask, jsonify, request
from flask_cors import CORS

import scripts.aitor

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello, World!'

@app.route('/parse', methods=['POST'])
def parse():
    result = scripts.aitor.parse_tsv('data/aitor.tsv')
    return jsonify(result)