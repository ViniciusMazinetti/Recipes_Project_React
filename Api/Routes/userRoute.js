const express = require('express')

const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const UserController = require('../Controllers/UserController')

const userRoute = express.Router()

userRoute.get('/', UserController.welcome)
userRoute.post('/user', UserController.createUser)
userRoute.get('/user', UserController.findUser)
userRoute.put('/user/:id', UserController.updateUser)
userRoute.post('/login', UserController.login)
userRoute.get('/token', ensureAuthenticated, UserController.welcome)
module.exports = userRoute