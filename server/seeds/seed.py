import sqlite3
import csv
from pathlib import Path
import os

DB_PATH = Path(__file__).parent.parent / "instance" / "portfolio.db"

con = sqlite3.connect(DB_PATH)
con.row_factory = sqlite3.Row

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
    for row in reader:
        db = con.cursor()
        db.execute(query, (row["title"], row["slug"], row["year"], row["description"], row["cover_image_url"], row["featured"], row["visible"]))

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

con.commit()
con.close()