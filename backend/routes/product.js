const express = require('express')
const router = express.Router()

const{getProducts,getProduct,createProduct,deleteProduct,updateProduct} = require('../controllers/product')
const{requireSignin} = require('../controllers/auth')

router.get('/',getProducts)
router.get('/:id',getProduct)
router.post('/createproduct',createProduct)
router.delete('/:id',requireSignin,deleteProduct)
router.put('/:id',requireSignin,updateProduct)

module.exports = router

