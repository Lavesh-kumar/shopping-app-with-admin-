require('dotenv').config()

module.exports={
PORT:process.env.PORT,
DB:process.env.DB,
jwt_key:process.env.jwt_key
}