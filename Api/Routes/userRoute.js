const express = require('express')

const ensureAuthenticated = require('../middlewares/ensureAuthenticated')

const UserController = require('../Controllers/UserController')

const userRoute = express.Router()

userRoute.get('/', UserController.welcome)
userRoute.post('/user', UserController.createUser)
userRoute.get('/user/:id', ensureAuthenticated, UserController.findUserById)
userRoute.put('/user/:id', ensureAuthenticated, UserController.updateUser)
userRoute.post('/login', UserController.login)
module.exports = userRoute