from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3
from pathlib import Path

app = Flask(__name__)
CORS(app)

DB_PATH = Path(__file__).parent / "instance" / "portfolio.db"

@app.route("/api/projects", methods=["GET"])
def projects_all():
    with sqlite3.connect(DB_PATH) as con: 
        con.row_factory = sqlite3.Row
        db = con.cursor()
        results = db.execute("SELECT * FROM projects").fetchall() # returns list of sqlite row objects
        return jsonify([dict(row) for row in results]), 200
        

@app.route("/api/stories", methods=["GET"])
def project_story():
    id = request.args["id"]
    with sqlite3.connect(DB_PATH) as con: 
        con.row_factory = sqlite3.Row
        db = con.cursor()
        results = db.execute("SELECT * FROM project_stories WHERE project_id = ?", (id,)).fetchall()
        print(results)
        return jsonify([dict(row) for row in results]), 200
    
