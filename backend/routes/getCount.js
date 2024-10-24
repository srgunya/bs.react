const express = require('express')
const router = express.Router()
const getCount = require('../controllers/getCount')

router.get('/logoCount', getCount)
router.get('/itemCount', getCount)

module.exports = router
