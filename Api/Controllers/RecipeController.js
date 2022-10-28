const Recipe = require("../Models/Recipe")
const User = require("../Models/User")
const mongoose = require('mongoose')

class RecipeController {


  static createRecipe = async (req, res) => {

    const {name, image, description, ingredients, preparation, user} = req.body 

    if( !mongoose.Types.ObjectId.isValid(user) ){
      res.status(422).json({
        msg : 'Object Id invalido'
      })
      return
    }

    const userVerification = await User.findById({
      _id: user
    })

    if(!userVerification) {
      res.status(422).json({
        msg : 'Usuário não encontrado'
      })
      return
    }

    const recipe = {name, image, description, ingredients, preparation, user}

    try {

      await Recipe.create(recipe)

      res.status(201).json(recipe)
    } catch (error) {
      res.status(500).json({
        msg : 'erro ao cadastrar'
    })
    }
  }

  static updateRecipe = async (req, res) => {

    const {name, image, description, ingredients, preparation} = req.body
    const {id} = req.params

    const recipeUpdate = {name, image, description, ingredients, preparation}

    try {

      const recipeU = await Recipe.updateOne({
        _id : id
      }, recipeUpdate)

      res.status(200).json(recipeU)

    } catch (error) {
      res.status(500).json({
        msg : 'erro ao atualizar'
      })
    }

  }

  static findAllRecipes = async (req, res) => {

    try {
      const recipeAll = await Recipe.find().populate('user')

      res.status(200).json(recipeAll)
    } catch (error) {
      res.status(500).json({
        msg : 'erro ao buscar'
      })
    }

  }

  static findRecipeByUserId = async (req, res) => {

    const {userId} = req.params

    try {
      const recipesUser = await Recipe.find({
        user : userId
      }).populate('user')

      res.status(200).json(recipesUser)
    } catch (error) {
      res.status(500).json({
        msg : 'erro ao buscar'
      })
    }

  }

  static findRecipeById = async (req, res) => {

    const {id} = req.params

    try {
      const recipe = await Recipe.findById({
        _id : id
      }).populate('user')

      res.status(200).json(recipe)
    } catch (error) {
      res.status(500).json({
        msg : 'erro ao buscar'
      })
    }

  }

  static deleteRecipe = async (req, res) => {
    const {id} = req.params

    try {
      const recipe = await Recipe.findByIdAndDelete({
        _id : id
      })

      res.status(200).json(recipe)
    } catch (error) {
      res.status(500).json({
        msg : 'erro ao deletar'
      })
    }
  }


}


module.exports = RecipeController