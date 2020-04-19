from flask import Flask, jsonify, request
from flask_cors import CORS

import scripts.aitor

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return 'Hello from SLUE Flask backend!'

@app.route('/leaderboard', methods=['GET'])
def get_leaderboard():
    return jsonify(scripts.aitor.read_tsv('data/glue.tsv'))
