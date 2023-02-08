DROP DATABASE IF EXISTS treatments_db;
CREATE DATABASE treatments_db;

\c treatments_db;

DROP TABLE IF EXISTS treatments; 

CREATE TABLE treatments (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    treatment_image TEXT,
    category TEXT NOT NULL,
    description TEXT,
    price INTEGER NOT NULL DEFAULT 0,
    therapist NOT NULL VARCHAR(255),
    therapist_image TEXT,
)