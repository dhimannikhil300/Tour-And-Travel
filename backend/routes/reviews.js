const express = require("express");
const { createReviwe } = require("../controllers/reviewController");
const { verifyUser } = require("../utils/verifyToken");
const router = express.Router()

router.post('/:tourId', verifyUser, createReviwe)

module.exports = router