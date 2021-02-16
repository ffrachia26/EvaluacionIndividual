var express = require('express');
var router = express.Router();
let detailController = require('../controllers/detailController.js');

router.get('/edit/:id', detailController.edit)

router.post('edit/:id', detailController.actulizar)

module.exports = router