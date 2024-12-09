const express = require('express');
const router = express.Router();
const iotController = require('../controllers/iot.controller');

router.post('/send-value', iotController.receiveData);
router.get('/sensor/:sensorId/all', iotController.getHistoricalData);
router.get('/sensor/:sensorId/latest', iotController.getLatestData);

module.exports = router;