const express = require('express');
const router = express.Router();
const statusesControllers = require('../controllers/statuses.controller');

router.get("/", statusesControllers.getAll);
router.get("/:statusId", statusesControllers.getById);
router.post("/", statusesControllers.create);
router.put("/:statusId", statusesControllers.updateById);
router.delete("/:statusId", statusesControllers.deleteById);

module.exports = router;