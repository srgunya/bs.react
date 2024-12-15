const express = require('express')
const router = express.Router()
const getFilter = require('../controllers/getFilter')

router.get('/getFilter/:props', getFilter)

module.exports = router
