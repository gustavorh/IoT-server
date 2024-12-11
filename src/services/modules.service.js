const sequelize = require("../utils/database");
const { Module, ModuleDetail } = require("../models");

class modulesService {
  async getAll() {
    try {
      return await Module.findAll({
        include: {
          model: ModuleDetail,
          as: "sensors",
        },
      });
    } catch (error) {
      throw new Error(`Failed to fetch sensors: ${error.message}`);
    }
  }

  async getById(id) {
    return await Module.findByPk(id, {
      include: {
        model: ModuleDetail,
        as: "sensors",
      },
    });
  }

  async create(moduleData) {
    const { name, location, microcontroller_id, sensors = [] } = moduleData;

    // Start a transaction
    const transaction = await sequelize.transaction();

    try {
      // Create the module
      const module = await Module.create({ name, location, microcontroller_id }, { transaction });

      // Validate sensors before creating them
      if (sensors.length > 0) {
        const sensorPromises = sensors.map((sensor) => {
          if (!sensor.sensorId) {
            throw new Error("Each sensor must have a valid sensorId.");
          }
          return ModuleDetail.create(
            {
              module_id: module.id,
              sensor_id: sensor.sensorId,
              quantity: sensor.quantity || 1, // Default to 1 if quantity is missing
            },
            { transaction }
          );
        });
        await Promise.all(sensorPromises);
      }

      // Commit the transaction
      await transaction.commit();

      return module;
    } catch (error) {
      // Rollback the transaction in case of an error
      await transaction.rollback();
      throw error;
    }
  }

  async updateById(id, moduleData) {
    const { name, location, microcontroller_id, sensors = [] } = moduleData;

    // Update the Module
    const module = await Module.findByPk(id);
    await module.update({ name, location, microcontroller_id });

    // Update associated sensor details
    await ModuleDetail.destroy({ where: { module_id: id } });
    await Promise.all(
      sensors.map(async (sensor) => {
        await ModuleDetail.create({ module_id: id, ...sensor });
      })
    );

    return module;
  }

  async deleteById(id) {
    // Delete the Module
    await Module.destroy({ where: { id } });

    // Delete associated sensor details
    await ModuleDetail.destroy({ where: { module_id: id } });
  }
}

module.exports = modulesService;
