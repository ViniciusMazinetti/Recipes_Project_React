const User = require("../Models/User")
const Recipe = require("../Models/Recipe")

class RecipeController {


  static createRecipe = async (req, res) => {


    const {name, image, description, ingredients, preparation, userId} = req.body

    const recipe = {name, image, description, ingredients, preparation, userId}

    try {

      await Recipe.create(recipe)

      res.status(201).json({
        msg : 'receita criada com sucesso'
    })
    } catch (error) {
      res.status(500).json({
        msg : 'erro ao cadastrar'
    })
    }
  }


}


module.exports = RecipeController