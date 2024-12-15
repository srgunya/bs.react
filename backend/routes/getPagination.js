const express = require('express')
const router = express.Router()
const getPagination = require('../controllers/getPagination')

router.get('/getPagination/:props', getPagination)

module.exports = router
