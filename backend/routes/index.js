const express = require('express')
const router = express.Router()

const getCount = require('./getCount')
const getById = require('./getById')
const getParams = require('./getParams')
const getList = require('./getList')
const getPagination = require('./getPagination')
const getFilter = require('./getFilter')

router.use('/', getCount)
router.use('/', getById)
router.use('/', getParams)
router.use('/', getList)
router.use('/', getPagination)
router.use('/', getFilter)

module.exports = router
