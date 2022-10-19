const express = require('express')

const UserController = require('./Controllers/UserController')

const userRoute = express.Router()

userRoute.get('/', UserController.welcome)

module.exports = userRoute