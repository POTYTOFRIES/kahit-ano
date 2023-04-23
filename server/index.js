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
  origin: ["http://localhost:5173"]}));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.get('/', (request, response) => {
  response.json('Hello World')
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

  pool.query('SELECT * FROM users WHERE user_id = $1', [id], (error, results) => {
      if (error) {
          throw error;
      }
      response.status(200).json(results.rows)
  })
})

app.post('/add-user', (request, response) => {
  const { name, email } = request.body

  pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email], (error, results) => {
      if (error) {
          throw error;
      }
      response.status(201).send('User added')
  })
})

// put  
app.put('/update-user/:id', (request, response) => {
  const id = request.params.id
  const { name, email } = request.body

  pool.query('UPDATE users SET name = $1, email = $2 WHERE user_id = $3', [name, email, id], (error, results) => {
      if (error) {
          throw error
      }
      response.status(200).send('User updated')
  })
})

// delete
app.delete('/delete-user/:id', (request, response) => {
  const id = request.params.id

  pool.query('DELETE FROM users WHERE user_id = $1', [id], (error, results) => {
      if (error) {
          throw error
      }
      response.status(200).send(`User with user_id = ${id} is deleted.`)
  })

})




app.listen(PORT, () => {
  console.log(`Listening to PORT ${PORT}...`)
})


