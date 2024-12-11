const express = require("express");
const router = express.Router();
const sensorsController = require("../controllers/sensors.controller");

router.get("/", sensorsController.getAll);
router.get("/:sensorId", sensorsController.getById);
router.post("/", sensorsController.create);
router.put("/:sensorId", sensorsController.updateById);
router.delete("/:sensorId", sensorsController.deleteById);

module.exports = router;
