const express = require('express')

const RecipeController = require('../Controllers/RecipeController')

const recipeRoute = express.Router()

recipeRoute.post('/recipe')

module.exports = recipeRoute