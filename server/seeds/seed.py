import sqlite3
import csv
from pathlib import Path
import os

DB_PATH = Path(__file__).parent.parent / "instance" / "portfolio.db"

con = sqlite3.connect(DB_PATH)
con.row_factory = sqlite3.Row

# Tags table
with open("tags.csv") as f:
    reader = csv.DictReader(f)
    db = con.cursor()
    for row in reader:
        db.execute("""
        INSERT INTO tags (name, type) VALUES (?,?)
        ON CONFLICT(name) DO UPDATE SET
            name = excluded.name,
            type = excluded.type
        """, (row["name"], row["type"]))


# Projects table
query = """INSERT INTO projects (title, slug, year, description, cover_image_url, featured, visible) 
    VALUES (?, ?, ?, ?, ?, ?, ?)
    ON CONFLICT(slug) DO UPDATE SET
        title = excluded.title,
        slug = excluded.slug,
        year = excluded.year,
        description = excluded.description,
        cover_image_url = excluded.cover_image_url,
        featured = excluded.featured,
        visible = excluded.visible
    """

with open("projects.csv") as f:
    reader = csv.DictReader(f)
    db = con.cursor()
    for row in reader:
        db.execute(query, (row["title"], row["slug"], row["year"], row["description"], row["cover_image_url"], row["featured"], row["visible"]))


# Stories table
for filename in os.listdir("./projects"):
    if filename.endswith(".md"):
        slug_value = filename[:-3]
        
        with open(f"./projects/{filename}") as f:
            content = f.read()
        
        db = con.cursor()
        db.execute("""
                INSERT INTO project_stories (project_id, story)
                VALUES ((SELECT id FROM projects WHERE slug = ?), ?)
                ON CONFLICT(project_id) DO UPDATE SET story = excluded.story  
                """, (slug_value, content))


# Project tags relationship table
with open("projects-tags.csv") as f:
    reader = csv.DictReader(f)
    db = con.cursor()
    for row in reader:
        db.execute("""
        INSERT OR IGNORE INTO project_tags (project_id, tag_id)
        VALUES (
            (SELECT id FROM projects WHERE slug = ?),
            (SELECT id FROM tags WHERE name = ?)
        )
        """, (row["project"], row["tag"]))


con.commit()
con.close()