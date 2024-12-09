const express = require('express');
const router = express.Router();
const statusesControllers = require('../controllers/statuses.controller');

router.post('/', statusesControllers.create);
router.get('/', statusesControllers.getAll);

module.exports = router;