require('dotenv').config()
const jwt = require('jsonwebtoken')

const auth = (request, response, next) => {
    const token = request.header('Authorization')

    if (!token) {
      return(
        response.status(403).json({error:'invalid token'})
      )
    }

    try {
        jwt.verify(token.slice(7), process.env.jwt_key, (error, user) => {
          if(error){
            return(
              response.sendStatus(403)
            )
          }
            else {
              request.user = user
              next()
            }
          })

    } catch (error) {
      console.error(error);
    }

}

module.exports = { auth }