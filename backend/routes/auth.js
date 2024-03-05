const expres = require('express')
const { register, login } = require('../controllers/authController')
const routes = expres.Router()

routes.post('/register', register)
routes.post('/login', login)


module.exports = routes