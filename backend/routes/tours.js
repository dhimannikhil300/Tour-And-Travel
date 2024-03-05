const expres = require('express')
const { createTour, updateTour, deleteTour, getSingleTour, getAllTour, getTourBySearch, getFeaturedTour, getTourCount } = require('../controllers/tourController')
const { verifyAdmin } = require('../utils/verifyToken')
const routes = expres.Router()

routes.post('/', verifyAdmin, createTour)
routes.put('/:id', verifyAdmin, updateTour)
routes.delete('/:id', verifyAdmin, deleteTour)
routes.get('/:id', getSingleTour)
routes.get('/', getAllTour)
routes.get('/search/getTourBySearch', getTourBySearch)
routes.get('/search/getFeaturedTours', getFeaturedTour)
routes.get('/search/getTourCount', getTourCount)

module.exports = routes