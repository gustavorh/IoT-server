const express = require("express");
const viewsController = require("../controllers/views.controller");
const router = express.Router();

router.get("/", viewsController.getIndex);
router.get("/sensors/:sensorId", viewsController.getSensorValues);

router.get("/manager/:entity", viewsController.getManagerEntity);

module.exports = router;
