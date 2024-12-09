const { SensorValue } = require("../models/index");
const { Sensor } = require("../models/index");

class iotService {
  async persistData(data) {
    try {
      return await SensorValue.create(data);
    } catch (error) {
      throw new Error(`Failed to create SensorValue: ${error.message}`);
    }
  }

  async getHistoricalData(sensorId) {
    try {
      const historicalData = await SensorValue.findAll({
        where: {
          sensor_id: sensorId,
        },
        order: [["createdAt", "ASC"]], // Optional: Sort by timestamp
      });
      return historicalData;
    } catch (error) {
      throw new Error(
        `Failed to fetch historical data for sensor ${sensorId}: ${error.message}`
      );
    }
  }

  async getLatestData(sensorId) {
    try {
      const latestData = await SensorValue.findOne({
        where: {
          sensor_id: sensorId,
        },
        order: [["createdAt", "DESC"]], // Get the most recent record
      });
      return latestData;
    } catch (error) {
      throw new Error(
        `Failed to fetch latest data for sensor ${sensorId}: ${error.message}`
      );
    }
  }

  async getDateFromValue(valueId) {
    try {
      const value = await SensorValue.findByPk(valueId);
      return value.createdAt;
    } catch (error) {
      throw new Error(
        `Failed to fetch date for value ${valueId}: ${error.message}`
      );
    }
  }

  async getSensorId(sensorName) {
    try {
      const sensor = await Sensor.findOne({
        where: {
          name: sensorName,
        },
      });
      return sensor.id;
    } catch (error) {
      throw new Error(
        `Failed to fetch sensor ID for sensor ${sensorName}: ${error.message}`
      );
    }
  }
}

module.exports = new iotService();
