const express = require('express')
const router = express.Router()
const { createProduct, buyProduct } = require('../controllers/productService')

router.route('/create')
      .post(createProduct)

            
module.exports = router