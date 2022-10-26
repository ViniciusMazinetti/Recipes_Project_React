const express = require('express')
const server = express()
const userRoute = require('./Routes/userRoute')
const recipeRoute = require('./Routes/recipeRoute')

const cors = require('cors')
const db = require("./Config/dbConnect")

db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso...")
})

server.use(cors())
server.use(express.json(), userRoute, recipeRoute)

module.exports = server