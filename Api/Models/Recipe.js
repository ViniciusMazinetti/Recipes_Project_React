//Importar o pacote do Mongoose
const mongoose = require('mongoose')

//Criar entidade (tabela no banco)
const Recipe = mongoose.model("Recipe", {
  name: String,
  image: String,
  description: String,
  ingredients: [String],
  preparation: String,
  userId: String 
})

//Exportar 
module.exports = Recipe