from flask import Flask, jsonify, request
from flask_cors import CORS

import scripts.functions

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello from SLUE backend in Flask!'

@app.route('/leaderboard', methods=['GET'])
def get_leaderboard():
    return jsonify(scripts.functions.read_tsv('data/glue.tsv'))
