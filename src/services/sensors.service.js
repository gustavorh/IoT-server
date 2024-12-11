const { Sensor } = require("../models/index");

class sensorsService {
  async getAll() {
    try {
      return await Sensor.findAll();
    } catch (error) {
      throw new Error(`Failed to fetch sensors: ${error.message}`);
    }
  }

  async getById(id) {
    try {
      return await Sensor.findByPk(id);
    } catch (error) {
      throw new Error(`Failed to fetch sensor: ${error.message}`);
    }
  }

  async create(data) {
    try {
      return await Sensor.create(data);
    } catch (error) {
      throw new Error(`Failed to create sensor: ${error.message}`);
    }
  }

  async updateById(id, data) {
    try {
      await Sensor.update(data, { where: { id } });
      return await this.getById(id);
    } catch (error) {
      throw new Error(`Failed to update sensor: ${error.message}`);
    }
  }

  async deleteById(id) {
    try {
      await Sensor.destroy({ where: { id } });
    } catch (error) {
      throw new Error(`Failed to delete sensor: ${error.message}`);
    }
  }
}

module.exports = new sensorsService();
