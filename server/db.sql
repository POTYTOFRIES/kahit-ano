CREATE TABLE users(
  users_id SERIAL PRIMARY KEY,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  username   VARCHAR(30) NOT NULL,
  email VARCHAR (30) NOT NULL,
  password VARCHAR(20) NOT NULL,
  created_at TIMESTAMP

);

CREATE TABLE posts(
  posts_id SERIAL NOT NULL,
  users_id
  title TEXT NOT NULL,
  body TEXT,
  photo IMAGE,
  rate INTEGER (4) NOT NULL,
  category VARCHAR(20) NOT NULL,
  created_at TIMESTAMP

);

DROP TABLE IF EXISTS lspost;
CREATE TABLE lspost(
  id SERIAL NOT NULL,
  likes INTEGER NOT NULL,
  share INTEGER NOT NULL,

);







