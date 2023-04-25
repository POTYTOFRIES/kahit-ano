DROP TABLE users;


DROP TABLE IF EXISTS users;
CREATE TABLE users(
  id SERIAL NOT NULL,
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  user_name   VARCHAR NOT NULL,
  email VARCHAR (30) NOT NULL,
  password VARCHAR(20) NOT NULL,
  created_at TIMESTAMP

);

DROP TABLE IF EXISTS posts;
CREATE TABLE posts(
  id SERIAL NOT NULL,
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







