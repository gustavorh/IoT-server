const express = require('express');
const router = express.Router();
const sensorsController = require('../controllers/sensors.controller');

router.post('/', sensorsController.create);
router.get('/', sensorsController.getAll);

module.exports = router;