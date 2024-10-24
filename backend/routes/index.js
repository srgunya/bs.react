const express = require('express')
const router = express.Router()

const getCount = require('./getCount')
const getById = require('./getById')

router.use('/', getCount)
router.use('/', getById)

module.exports = router
