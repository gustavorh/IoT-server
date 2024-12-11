const sensorsService = require("../services/sensors.service");

class sensorsController {
  
  async getAll(req, res) {
    try {
      const sensors =
      await sensorsService.getAll();
      res.status(200).json(sensors);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getById(req, res) {
    try {
      const id = req.params.sensorId;
      const sensor = await sensorsService.getById(id);
      res.status(200).json(sensor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  async create(req, res) {
    try {
      const sensor =
        await sensorsService.create(req.body);
      res.status(201).json(sensor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async updateById(req, res) {
    try {
      const id = req.params.sensorId;
      const sensor =
        await sensorsService.updateById(id, req.body);
      res.status(200).json(sensor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async deleteById(req, res) {
    try {
      const id = req.params.sensorId;
      await sensorsService.deleteById(id);
      res.status(204).end();
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new sensorsController();
