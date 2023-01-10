const express =require('express')
const { home } = require('nodemon/lib/utils')
const router = express.Router()
const homeController = require('../controllers/home')

router.get('/', homeController.getIndex) //Read
router.post('/new', homeController.createItem)

module.exports = router