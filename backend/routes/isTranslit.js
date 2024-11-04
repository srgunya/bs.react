const express = require('express')
const router = express.Router()
const isTranslit = require('../controllers/isTranslit')

router.get('/isTranslit/:word', isTranslit)

module.exports = router
