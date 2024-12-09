const { Sensor } = require("../models/index");

class sensorsService {
  async createSensor(data) {
    try {
      return await Sensor.create(data);
    } catch (error) {
      throw new Error(`Failed to create sensor: ${error.message}`);
    }
  }

  async getAllSensors() {
    try {
      return await Sensor.findAll();
    } catch (error) {
      throw new Error(`Failed to fetch sensors: ${error.message}`);
    }
  }
}

module.exports = new sensorsService();