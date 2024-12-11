const { Status } = require("../models/index");

class statusesService {
  async getAll() {
    try {
      return await Status.findAll();
    } catch (error) {
      throw new Error(`Failed to fetch statuses: ${error.message}`);
    }
  }

  async getById(statusId) {
    try {
      return await Status.findByPk(statusId);
    } catch (error) {
      throw new Error(`Failed to fetch status: ${error.message}`);
    }
  }

  async create(data) {
    try {
      return await Status.create(data);
    } catch (error) {
      throw new Error(`Failed to create status: ${error.message}`);
    }
  }

  async updateById(statusId, data) {
    try {
      await Status.update(data, {
        where: { id: statusId },
      });
      return await Status.findByPk(statusId);
    } catch (error) {
      throw new Error(`Failed to update status: ${error.message}`);
    }
  }

  async deleteById(statusId) {
    try {
      await Status.destroy({
        where: { id: statusId },
      });
    } catch (error) {
      throw new Error(`Failed to delete status: ${error.message}`);
    }
  }

  async getColumns() {
    try {
      console.log(Object.keys(Status.getAttributes));
      
      return await Object.keys(Status.getAttributes); // Extract column names
    } catch (error) {
      throw new Error(`Failed to fetch statuses: ${error.message}`);
    }
  }
}

module.exports = new statusesService();