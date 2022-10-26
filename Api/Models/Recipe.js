//Importar o pacote do Mongoose
const mongoose = require('mongoose')
const User = require('./User')

//Criar entidade (tabela no banco)
const Recipe = mongoose.model("Recipe", {
  name: String,
  image: String,
  description: String,
  ingredients: [String],
  preparation: String,
  user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
})

//Exportar 
module.exports = Recipe