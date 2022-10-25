const express = require('express')

const UserController = require('./Controllers/UserController')

const userRoute = express.Router()

userRoute.get('/', UserController.welcome)
userRoute.post('/user', UserController.createUser)
userRoute.put('/user/:id', UserController.updateUser)
userRoute.post('/login', UserController.login)
userRoute.get('/token', UserController.checkToken)

module.exports = userRoute