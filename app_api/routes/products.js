var express = require('express');
var router = express.Router();
var multer  = require('multer');
var upload = multer({ dest: './app_api/imgs/' });

var categoriesCtrl = require('../controllers/categories');
var productsCtrl = require('../controllers/products');
var ctrlAuth = require('../controllers/authentication');

//Categories
router.get('/categories', categoriesCtrl.categoriesList);
router.post('/categories', categoriesCtrl.categoriesCreate);
router.put('/categories/:categoryId', categoriesCtrl.categoriesUpdateOne);
router.delete('/categories/:categoryId', categoriesCtrl.categoriesDeleteOne);

//Products
router.get('/categories/:categoryId/products', productsCtrl.productsList);
router.post('/categories/:categoryId/products', upload.single('productImg'), productsCtrl.productsCreate);
router.get('/categories/:categoryId/products/:productId', productsCtrl.productsReadOne);
router.put('/categories/:categoryId/products/:productId', upload.single('productImg'), productsCtrl.productsUpdateOne);
router.delete('/categories/:categoryId/products/:productId', productsCtrl.productsDeleteOne);

//Authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;
