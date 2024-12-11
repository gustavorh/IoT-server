const iotService = require("../services/iot.service");
const statusesService = require("../services/statuses.service");

class viewsController {
  async getIndex(req, res) {
    try {
      // Latest data for KY018
      const latestKY018 = await iotService.getLatestData(1);
      const latestGYML8511 = await iotService.getLatestData(2);
      const latestMQ2 = await iotService.getLatestData(3);

      res.render("pages/index", { latestKY018, latestGYML8511, latestMQ2 });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async getSensorValues(req, res) {
    const sensorId = req.params.sensorId;
    const values = await iotService.getHistoricalData(sensorId);
    res.render("pages/sensors", { values });
  }

  async getManagerEntity(req, res) {
    const entity = req.params.entity;
    switch (entity.toLowerCase()) {
      case "statuses":
        const data = await statusesService.getAll();
        const columns = await statusesService.getColumns();
        console.log(columns);

        res.render("pages/managers/statuses", { data, columns });
        break;
      case "microcontrollers":
        res.render("pages/managers/microcontrollers");
        break;
      case "sensors":
        res.render("pages/managers/sensors");
        break;
      case "modules":
        res.render("pages/managers/modules");
        break;
      default:
        break;
    }
  }
}

module.exports = new viewsController();
