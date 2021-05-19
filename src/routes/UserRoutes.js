const express = require("express")
const UserRoutes = express.Router();
const AuthController = require('../controllers/AuthController')
UserRoutes.get('/users', AuthController.findUsers)
UserRoutes.post('/new-user', AuthController.createUser)



module.exports = UserRoutes;