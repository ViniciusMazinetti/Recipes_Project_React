const express = require('express')
const server = express()

const cors = require('cors')
const db = require("./Config/dbConnect")

db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open", () => {
  console.log("Conexão com o banco feita com sucesso...")
})

server.use(cors())
server.use(express.json())

server.get('/', (req, res) => {
  res.json({
    message: "Bem vindo..."
  })
})

module.exports = server