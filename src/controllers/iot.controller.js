const iotService = require("../services/iot.service");

class iotController {

  async receiveData(req, res) {
    try {
      const data = await iotService.persistData(req.body);
      res.status(201).json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getHistoricalData(req, res) {
    try {
      const sensorId = req.params.sensorId;
      const historicalData = await iotService.getHistoricalData(sensorId);
      res.status(200).json(historicalData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getLatestData(req, res) {
    try {
      const sensorId = req.params.sensorId;
      const latestData = await iotService.getLatestData(sensorId);
      res.status(200).json(latestData);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new iotController();
