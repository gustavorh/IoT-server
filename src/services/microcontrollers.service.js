const { Microcontroller } = require("../models/index");

class MicrocontrollersService {
  async getAll() {
    try {
      return await Microcontroller.findAll();
    } catch (error) {
      throw new Error(`Failed to fetch microcontrollers: ${error.message}`);
    }
  }

  async getById(id) {
    try {
      return await Microcontroller.findByPk(id);
    } catch (error) {
      throw new Error(`Failed to fetch microcontroller: ${error.message}`);
    }
  }

  async create(data) {
    try {
      return await Microcontroller.create(data);
    } catch (error) {
      throw new Error(`Failed to create microcontroller: ${error.message}`);
    }
  }

  async updateById(id, data) {
    try {
      await Microcontroller.update(data, { where: { id } });
      return await this.getById(id);
    } catch (error) {
      throw new Error(`Failed to update microcontroller: ${error.message}`);
    }
  }

  async deleteById(id) {
    try {
      await Microcontroller.destroy({ where: { id } });
    } catch (error) {
      throw new Error(`Failed to delete microcontroller: ${error.message}`);
    }
  }
}

module.exports = new MicrocontrollersService();
