const express = require('express')
const router = express.Router()
const getList = require('../controllers/getList')

router.get('/getList/:props', getList)

module.exports = router
