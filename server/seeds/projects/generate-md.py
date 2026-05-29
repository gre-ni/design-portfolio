import sqlite3
from pathlib import Path

DB_PATH = Path(__file__).parent.parent.parent / "instance" / "portfolio.db"

with sqlite3.connect(DB_PATH) as con: 
    con.row_factory = sqlite3.Row
    db = con.cursor()
    results = db.execute("SELECT title, slug FROM projects").fetchall()
    projects = [dict(row) for row in results]

for project in projects: 
    with open(f"{project["slug"]}.md", "w") as f:
        f.write(f"# Detail description for {project["title"]}\n")