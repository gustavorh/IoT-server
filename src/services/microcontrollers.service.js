const { Microcontroller } = require("../models/index");

class MicrocontrollersService {
  async createMicrocontroller(data) {
    try {
      return await Microcontroller.create(data);
    } catch (error) {
      throw new Error(`Failed to create microcontroller: ${error.message}`);
    }
  }

  async getAllMicrocontrollers() {
    try {
      return await Microcontroller.findAll();
    } catch (error) {
      throw new Error(`Failed to fetch microcontrollers: ${error.message}`);
    }
  }
}

module.exports = new MicrocontrollersService();