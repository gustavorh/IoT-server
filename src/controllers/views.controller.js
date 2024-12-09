const iotService = require("../services/iot.service");
const microcontrollersService = require("../services/microcontrollers.service");
const modulesService = require("../services/modules.service");
const sensorsService = require("../services/sensors.service");
const statusesService = require("../services/statuses.service");

class viewsController {
  async handleIndex(req, res) {
    try {
      const latestData1 = await iotService.getLatestData(1);
      const latestData1Date = await iotService.getDateFromValue(latestData1.id);
      const latestData2 = await iotService.getLatestData(2);
      const latestData2Date = await iotService.getDateFromValue(latestData2.id);
      const latestData3 = await iotService.getLatestData(3);
      const latestData3Date = await iotService.getDateFromValue(latestData3.id);

      res.render("index", {
        // Pass the latest data and date for each sensor to the view
        latestData1: latestData1.value,
        latestData1Date: latestData1Date,
        latestData2: latestData2.value,
        latestData2Date: latestData2Date,
        latestData3: latestData3.value,
        latestData3Date: latestData3Date,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async handleSensors(req, res) {
    try {
      res.render("sensors");
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async handleSensor(req, res) {
    try {
      const sensorName = req.params.sensorName;
      const sensorId = await iotService.getSensorId(sensorName);
      const historicalData = await iotService.getHistoricalData(sensorId);

      res.render("sensor", {
        sensorName: sensorName,
        historicalData: historicalData,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async handleMantenedores(req, res) {
    try {
      const table = req.params.table;
      if (table === "microcontrollers") {
        const microcontrollers = await microcontrollersService.getAllMicrocontrollers();
        res.render("microcontrollers", { microcontrollers: microcontrollers });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async handleCreate(req, res) {
    
  }
}

module.exports = new viewsController();
