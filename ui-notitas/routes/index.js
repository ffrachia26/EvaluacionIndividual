var express = require('express');
var router = express.Router();
let indexController = require('../controllers/indexController.js');

router.get('/', indexController.home);
router.post('/crear', indexController.crear)
router.post('/delete/:id', indexController.delete)


module.exports = router