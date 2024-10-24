const express = require('express')
const router = express.Router()
const getById = require('../controllers/getById')

router.get('/getLogoById/:id', getById)
router.get('/getItemById/:id', getById)

module.exports = router
