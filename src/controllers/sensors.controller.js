const sensorsService = require("../services/sensors.service");

class sensorsController {
  async create(req, res) {
    try {
      const sensor =
        await sensorsService.createSensor(req.body);
      res.status(201).json(sensor);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getAll(req, res) {
    try {
      const sensors =
        await sensorsService.getAllSensors();
      res.status(200).json(sensors);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new sensorsController();
