const express = require('express');
const router = express.Router();
const modulesController = require('../controllers/modules.controller');

router.get("/", modulesController.getAll);
router.get("/:sensorId", modulesController.getById);
router.post("/", modulesController.create);
router.put("/:sensorId", modulesController.updateById);
router.delete("/:sensorId", modulesController.deleteById);

module.exports = router;