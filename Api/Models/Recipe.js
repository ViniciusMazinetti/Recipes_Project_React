//Importar o pacote do Mongoose
const mongoose = require('mongoose')

//Criar entidade (tabela no banco)
const Recipe = mongoose.model("Recipe", {
  name: {
    type : String,
    required : true,
    max : 40
  },
  image: {
    type : String,
    default: 'https://www.letheshouse.pt/wp-content/uploads/2018/07/user-icon.jpg' 
  },
  description: {
    type : String,
    max : 200
  },
  ingredients: {
    type : [String],
    required : true
  },
  preparation: {
    type : String,
    required : true
  },
  user: {
    type : mongoose.Schema.Types.ObjectId,
    ref: "User",
    required : true
  }
})

//Exportar 
module.exports = Recipe