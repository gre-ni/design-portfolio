from flask import Flask, jsonify, request
from flask_cors import CORS
import sqlite3
from pathlib import Path

app = Flask(__name__)
CORS(app)

DB_PATH = Path(__file__).parent / "instance" / "portfolio.db"

@app.route("/api/projects", methods=["GET"])
def projects_all():
    tag = request.args.get("tag")
    if not tag:
        with sqlite3.connect(DB_PATH) as con: 
            con.row_factory = sqlite3.Row
            db = con.cursor()
            results = db.execute("SELECT * FROM projects WHERE featured = 1 ORDER BY ordering DESC, featured DESC").fetchall() # returns list of sqlite row objects
            return jsonify([dict(row) for row in results]), 200

    with sqlite3.connect(DB_PATH) as con: 
        con.row_factory = sqlite3.Row
        db = con.cursor()
        results = db.execute("SELECT * FROM projects WHERE visible = 1 AND id IN (SELECT project_id FROM project_tags WHERE tag_id IN (SELECT id FROM tags WHERE name = ?))", (tag,)).fetchall() # returns list of sqlite row objects
        return jsonify([dict(row) for row in results]), 200   
    
        
@app.route("/api/detail", methods=["GET"])
def project_story():
    slug = request.args.get("slug")
    with sqlite3.connect(DB_PATH) as con: 
        con.row_factory = sqlite3.Row
        db = con.cursor()
        results = db.execute("""
            SELECT id, title, slug, year, description, cover_image_url, project_stories.story
            FROM projects
            LEFT JOIN project_stories ON projects.id = project_stories.project_id
            WHERE slug = ?
            """, (slug,)).fetchall()
        print(results)
        return jsonify([dict(row) for row in results]), 200
    

@app.route("/api/tags", methods=["GET"])
def project_tags():
    slug = request.args.get("slug")
    with sqlite3.connect(DB_PATH) as con: 
        con.row_factory = sqlite3.Row
        db = con.cursor()
        results = db.execute("""
            SELECT slug, tags.name, tags.type
            FROM projects
            LEFT JOIN project_tags ON projects.id = project_tags.project_id
            JOIN tags ON project_tags.tag_id = tags.id
            WHERE slug = ?
            """, (slug,)).fetchall()
        return jsonify([dict(row) for row in results]), 200

@app.route("/api/images", methods=["GET"])
def project_images():
    slug = request.args.get("slug")
    with sqlite3.connect(DB_PATH) as con: 
        con.row_factory = sqlite3.Row
        db = con.cursor()
        results = db.execute("""
            SELECT slug, project_images.image_url as image_url
            FROM projects
            LEFT JOIN project_images ON projects.id = project_images.project_id
            WHERE slug = ? AND project_images.visible = 1
            ORDER BY project_images.ordering DESC
            """, (slug,)).fetchall()
        return jsonify([dict(row) for row in results]), 200