const express = require('express');
const router = express.Router();
const microcontrollerController = require('../controllers/microcontrollers.controller');

router.post('/', microcontrollerController.create);
router.get('/', microcontrollerController.getAll);

module.exports = router;