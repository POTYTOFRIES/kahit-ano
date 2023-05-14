require('dotenv').config()
const jwt = require('jsonwebtoken')

const generateJwt = (user) => {
  return(
    jwt.sign(
        user, process.env.jwt_key, { expiresIn: '1h' })
)  
}

module.exports = generateJwt 