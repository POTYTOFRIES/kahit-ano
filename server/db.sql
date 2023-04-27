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
  posts_id SERIAL PRIMARY KEY,
  users_id 
  title VARCHAR NOT NULL,
  body TEXT,
  photo VARCHAR,
  rate INTEGER (4) NOT NULL,
  created_at TIMESTAMP,
  edited_at TIMESTAMP,
  deleted_at TIMESTAMP

);

CREATE TABLE comments (
  comments_id SERIAL PRIMARY KEY,
  posts_id 
  users_id 
  comments TEXT,
  created_at TIMESTAMP,
  edited_at TIMESTAMP,
  deleted_at TIMESTAMP

);

CREATE TABLE category (
  category_id SERIAL PRIMARY KEY,
  category_name VARCHAR NOT NULL,
  created_at TIMESTAMP,
  edited_at TIMESTAMP,
);

CREATE TABLE likes (
  likes_id SERIAL PRIMARY KEY,
  users_id 
  likes INTEGER,
  added_at TIMESTAMP
);

CREATE TABLE bookmarks (
  bookmarks_id SERIAL PRIMARY KEY,
  users_id
  posts_id
  bookmark INTEGER
  saved_at TIMESTAMP
  deleted_at TIMESTAMP
)







