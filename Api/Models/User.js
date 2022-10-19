//Importar o pacote do Mongoose
const mongoose = require('mongoose')

//Criar entidade (tabela no banco)
const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String
})

//Exportar
module.exports = User