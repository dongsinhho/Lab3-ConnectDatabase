const express = require('express');
const router = express.Router();
const contactController = require('../controller/contact.controller');

router.get('/', contactController.getContact);
router.post('/', contactController.postContact);

module.exports = router;