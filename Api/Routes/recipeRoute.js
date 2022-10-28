const express = require('express')
const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const RecipeController = require('../Controllers/RecipeController')

const recipeRoute = express.Router()

recipeRoute.post('/recipe', ensureAuthenticated, RecipeController.createRecipe)
recipeRoute.patch('/recipe/:id', ensureAuthenticated, RecipeController.updateRecipe)
recipeRoute.get('/recipe', ensureAuthenticated, RecipeController.findAllRecipes)
recipeRoute.get('/userRecipe/:userId', ensureAuthenticated, RecipeController.findRecipeByUserId)
recipeRoute.get('/recipe/:id', ensureAuthenticated, RecipeController.findRecipeById)
recipeRoute.delete('/recipe/:id', ensureAuthenticated, RecipeController.deleteRecipe)

module.exports = recipeRoute