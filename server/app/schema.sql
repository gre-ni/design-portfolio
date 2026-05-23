CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    slug TEXT UNIQUE NOT NULL,
    year INTEGER,
    description TEXT,
    cover_image_url TEXT,
    featured BOOLEAN,
    visible BOOLEAN
);

CREATE TABLE IF NOT EXISTS project_stories (
    project_id INTEGER PRIMARY KEY,
    story TEXT,
    FOREIGN KEY (project_id) REFERENCES projects(id)
);

CREATE TABLE IF NOT EXISTS tags (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT UNIQUE NOT NULL,
    type TEXT CHECK(type IN ('category', 'tool', 'industry'))
);

CREATE TABLE IF NOT EXISTS project_tags (
    project_id INTEGER REFERENCES projects(id),
    tag_id INTEGER REFERENCES tags(id),
    PRIMARY KEY (project_id, tag_id)
);