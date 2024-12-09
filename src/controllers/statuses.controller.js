const statusesService = require("../services/statuses.service");

class statusesController {
  async create(req, res) {
    try {
      const status =
        await statusesService.createStatus(req.body);
      res.status(201).json(status);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const statuses =
        await statusesService.getAllStatuses();
      res.status(200).json(statuses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new statusesController();
