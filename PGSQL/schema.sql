DROP DATABASE IF EXISTS magmutualth;

CREATE DATABASE magmutualth;

/* SET search_path TO magmutualth; */
\c magmutualth;

DROP TABLE IF EXISTS users;

CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  lastname VARCHAR NOT NULL,
  firstname VARCHAR NOT NULL,
  email VARCHAR NOT NULL,
  profession VARCHAR NOT NULL,
  dateCreated DATE DEFAULT CURRENT_DATE,
  country VARCHAR NOT NULL,
  city VARCHAR NOT NULL
);