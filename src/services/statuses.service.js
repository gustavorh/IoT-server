const { Status } = require("../models/index");

class statusesService {
  async createStatus(data) {
    try {
      return await Status.create(data);
    } catch (error) {
      throw new Error(`Failed to create status: ${error.message}`);
    }
  }

  async getAllStatuses() {
    try {
      return await Status.findAll();
    } catch (error) {
      throw new Error(`Failed to fetch statuses: ${error.message}`);
    }
  }
}

module.exports = new statusesService();