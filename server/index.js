require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();

const bodyParser = require("body-parser");

const PORT = 8000;

const Pool = require("pg").Pool;

const pool = new Pool({
  user: process.env.user,
  host: process.env.host,
  database: process.env.database,
  password: process.env.password,
  port: process.env.port,
});

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});

app.get("/all-users", (request, response) => {
  pool.query("SELECT * FROM users", (error, results) => {
    if (error) {
      throw error; 
    }
    response.status(200).json(results.rows);
  });
});

app.get("/get-user/:id", (request, response) => {
  const id = request.params.id;

  pool.query(
    "SELECT * FROM users WHERE users_id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
});

// post
app.post("/add-user", (request, response) => {
  const { first_name, last_name, username, email, password, created_at } =
    request.body;

  pool.query(
    "INSERT INTO users (first_name, last_name, username, email, password, created_at) VALUES ($1, $2, $3, $4, $5, $6)",
    [first_name, last_name, username, email, password, created_at],
    (error, results) => {
      if (error) {
        throw error;
      }

      response.status(201).send("User added");
    }
  );
});

// put
app.put("/update-user/:id", (request, response) => {
  const id = request.params.id;
  const { first_name, last_name, username, email, password, created_at } =
    request.body;

  pool.query(
    "UPDATE users SET first_name = $1, last_name = $2, username = $3, email = $4, password = $5, created_at = $6 WHERE users_id = $7",
    [first_name, last_name, username, email, password, created_at, id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send("User updated");
    }
  );
});

// delete
app.delete("/delete-user/:id", (request, response) => {
  const id = request.params.id;

  pool.query(
    "DELETE FROM users WHERE users_id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).send(`User with user_id = ${id} is deleted.`);
    }
  ); 
});