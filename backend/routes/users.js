const expres = require('express')
const {updateUser, deleteUser, getSingleUser, getAllUser } = require('../controllers/userController')
const { verifyUser, verifyAdmin } = require('../utils/verifyToken')
const routes = expres.Router()

routes.put('/:id', verifyUser, updateUser)
routes.delete('/:id', verifyUser, deleteUser)
routes.post('/:id', verifyUser, getSingleUser)
routes.get('/', verifyAdmin, getAllUser)

module.exports = routes