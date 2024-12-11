const ModulesService = require("../services/modules.service");
const modulesService = new ModulesService();

class modulesController {
  async getAll(req, res) {
    try {
      const sensors = await modulesService.getAll();
      res.status(200).json(sensors);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const id = req.params.sensorId;
      const sensor = await modulesService.getById(id);
      res.status(200).json(sensor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async create(req, res) {
    try {
      const module = await modulesService.create(req.body);
      res.status(201).json(module);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateById(req, res) {
    try {
      const id = req.params.sensorId;
      const sensor = await modulesService.updateById(id, req.body);
      res.status(200).json(sensor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteById(req, res) {
    try {
      const id = req.params.sensorId;
      await modulesService.deleteById(id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new modulesController();
