require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()

const bodyParser = require('body-parser')

const PORT = 8000

const Pool = require('pg').Pool

const pool = new Pool({
    user: process.env.user,
    host: process.env.host,
    database: process.env.database,
    password: process.env.password,
    port: process.env.port
})

app.use(cors({
  origin: ["http://localhost:3000"]}));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))


app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})

app.get('/all-users', (request, response) => {
    pool.query('SELECT * FROM users', (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows)
    })
})

app.get('/get-user/:id', (request, response) => {
  const id = request.params.id

  pool.query('SELECT * FROM users WHERE users_id = $1', [id], (error, results) =>{
      if (error) {
          throw error;
      }
      response.status(200).json(results.rows)
  })
})
