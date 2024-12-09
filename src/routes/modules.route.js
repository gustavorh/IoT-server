const express = require('express');
const router = express.Router();
const modulesController = require('../controllers/modules.controller');

router.post('/', modulesController.create);
router.get('/', modulesController.getAll);

module.exports = router;