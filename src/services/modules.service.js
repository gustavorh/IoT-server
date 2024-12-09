const { Module, ModuleDetail, sequelize } = require("../models/index");

class modulesService {
  async createModule(data) {
    let transaction;
    try {
      // Start the transaction
      transaction = await sequelize.transaction();
      const { name, location, microcontroller_id, module_details } = data;
  
      // Create the module
      const module = await Module.create(
        {
          name,
          location,
          microcontroller_id,
        },
        { transaction }
      );
  
      // Handle module details (single or multiple sensors)
      const moduleDetailsToCreate = Array.isArray(module_details)
        ? module_details
        : [module_details];
  
      // Create module details for each sensor
      await Promise.all(
        moduleDetailsToCreate.map((detail) =>
          ModuleDetail.create(
            {
              module_id: module.id,
              sensor_id: detail.sensor_id,
              quantity: detail.quantity,
            },
            { transaction }
          )
        )
      );
  
      // Commit the transaction
      await transaction.commit();
  
      // Fetch the created module with associated module details
      const createdModule = await Module.findByPk(module.id, {
        include: [
          {
            model: ModuleDetail,
            as: "module_detail",
          },
        ],
      });
  
      return createdModule;
    } catch (error) {
      // If a transaction exists and is not finished, roll it back
      if (transaction && !transaction.finished) {
        try {
          await transaction.rollback();
        } catch (rollbackError) {
          console.error("Error rolling back transaction:", rollbackError);
        }
      }
      throw new Error(`Failed to create module: ${error.message}`);
    }
  }

  async getAllModules() {
    try {
      return await Module.findAll({
        include: [
          {
            model: ModuleDetail,
            as: "module_detail",
          },
        ],
      });
    } catch (error) {
      throw new Error(`Failed to fetch modules: ${error.message}`);
    }
  }
}

module.exports = new modulesService();
