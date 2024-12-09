const express = require("express");
const router = express.Router();
const viewsController = require("../controllers/views.controller");
const microcontrollersController = require("../controllers/microcontrollers.controller");

router.get("/", viewsController.handleIndex);

// Mantenedores
router.get("/mantenedores/:table", viewsController.handleMantenedores);

router.get("/sensors", viewsController.handleSensors);
router.get("/sensors/:sensorName", viewsController.handleSensor);

router.get("/microcontrollers/add", microcontrollersController.handleCreateView)


module.exports = router;
