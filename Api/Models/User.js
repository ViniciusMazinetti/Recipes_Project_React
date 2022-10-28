//Importar o pacote do Mongoose
const mongoose = require('mongoose')

//Criar entidade (tabela no banco)
const User = mongoose.model("User", {
  name: {
    type : String,
    required : true
  },
  email: {
    type : String,
    required : true,
    unique : true
  },
  password: {
    type: String,
    required: true
  }
})

//Exportar
module.exports = User