const express = require("express");
const router = express.Router();
const microcontrollerController = require("../controllers/microcontrollers.controller");

router.get("/", microcontrollerController.getAll);
router.get("/:microcontrollerId", microcontrollerController.getById);
router.post("/", microcontrollerController.create);
router.put("/:microcontrollerId", microcontrollerController.updateById);
router.delete("/:microcontrollerId", microcontrollerController.deleteById);

module.exports = router;
