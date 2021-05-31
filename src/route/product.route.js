const express = require('express');
const router = express.Router();
const multer = require('multer');
const productController = require('../controller/product.controller');

var upload = multer({ dest: './src/public/Products' });

router.get('/', productController.getProduct);
router.get('/getIndex', productController.getIndex);
router.get('/create', productController.create);
router.post('/create', upload.single('imageUrl') , productController.postCreate);
router.get('/update', productController.update);
router.post('/update', productController.postUpdate);
router.get('/delete', productController.delete);

module.exports = router;