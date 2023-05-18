const generateJwt = require("./jwt/token_generator");
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const verifyToken = require("./middleware/auth");
const cloudinary = require("cloudinary").v2;
const multer = require("multer");

const PORT = 8000;

const Pool = require("pg").Pool;

//set-up
const storage = multer.memoryStorage();
const upload = multer({ storage });

cloudinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret,
});

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

  const encryptedPassword = bcrypt.hashSync(password, 10);

  pool.query(
    "INSERT INTO users (first_name, last_name, username, email, password, created_at) VALUES ($1, $2, $3, $4, $5, $6)",
    [first_name, last_name, username, email, encryptedPassword, created_at],
    (error, results) => {
      if (error) {
        throw error;
      }
      const token = generateJwt({
        ...request.body,
        password: encryptedPassword,
      });
      response.status(201).json(token);
    }
  );

  // const token = generateJwt(newUser.rows[0])
  // response.json({token})
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

app.post("/log-in", (request, response) => {
  console.log(request.body);
  const { email, password } = request.body;
  pool.query(
    "SELECT email, password FROM users WHERE email = $1",
    [email],
    (error, results) => {
      if (error) {
        throw error;
      }
      const compare = bcrypt.compareSync(password, results.rows[0].password);
      if (compare) {
        const generatedToken = generateJwt({
          ...request.body,
          password: results.rows[0].password,
        });
        response.status(201).json({
          generatedToken: generatedToken,
          result: results.rows,
        });
      }
    }
  );
});

app.post("/auth/verifyToken", (request, response) => {
  const jwt_token = request.body.jwt_token;

  try {
    const decode = jwt.verify(jwt_token, process.env.jwt_secret);
    console.log(decode);
    return response.status(200).send({
      email: decode.email,
      password: decode.password,
    });
  } catch (err) {
    console.log(err);
    return response.status(401).send("fsfsfs");
  }
});

// Table POSTS

app.post("/add-post", (request, response) => {
  const {
    title,
    body,
    category_id,
    photo,
    rate,
    created_at,
    edited_at,
    deleted_at,
  } = request.body;

  pool.query(
    "INSERT INTO posts (title, body, category_id, photo, rate, created_at, edited_at, deleted_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)",
    [title, body, category_id, photo, rate, created_at, edited_at, deleted_at],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(201).send("Post added");
    }
  );
});

app.get("/all-posts", (request, response) => {
  pool.query("SELECT * FROM posts", (error, results) => {
    if (error) {
      throw error;
    }
    response.status(200).json(results.rows);
  });
});

app.get("/get-post/:id", (request, response) => {
  const id = request.params.id;

  pool.query(
    "SELECT * FROM posts WHERE post_id = $1",
    [id],
    (error, results) => {
      if (error) {
        throw error;
      }
      response.status(200).json(results.rows);
    }
  );
});

app.post("/upload-photo", upload.single("file"), (req, res) => {
  cloudinary.uploader
    .upload_stream({ resource_type: "auto" }, (error, result) => {
      if (error) {
        res.status(500).json({ message: "Server error" });
      } else {
        res.json(result);
      }
    })
    .end(req.file.buffer);
});
