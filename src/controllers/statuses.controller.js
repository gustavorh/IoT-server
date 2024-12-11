const statusesService = require("../services/statuses.service");

class statusesController {
  async getAll(req, res) {
    try {
      const statuses =
        await statusesService.getAll();
      res.status(200).json(statuses);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const status =
        await statusesService.getById(req.params.statusId);
      res.status(200).json(status);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const status =
        await statusesService.create(req.body);
      res.status(201).json(status);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateById(req, res) {
    try {
      const status =
        await statusesService.updateById(req.params.statusId, req.body);
      res.status(200).json(status);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteById(req, res) {
    try {
      await statusesService.deleteById(req.params.statusId);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new statusesController();
