const sequelize = require("../utils/database");

// Import all models
const Microcontroller = require("./microcontroller.model");
const Module = require("./module.model");
const ModuleDetail = require("./module_detail.model");
const Sensor = require("./sensor.model");
const SensorValue = require("./sensor_value.model");
const Status = require("./status.model");

// Define associations
Microcontroller.belongsTo(Status, {
  foreignKey: "status_id",
  as: "status",
});

Module.associate = (models) => {
  Module.hasMany(models.ModuleDetail, {
    foreignKey: 'module_id',
    as: 'sensors'
  });
};

ModuleDetail.associate = (models) => {
  ModuleDetail.belongsTo(models.Module, {
    foreignKey: 'module_id',
    as: 'module'
  });
};

SensorValue.belongsTo(Sensor, {
  foreignKey: "sensor_id",
  as: "sensor",
});

Module.associate({ ModuleDetail });
ModuleDetail.associate({ Module });

// Export all models for use in services or controllers
module.exports = {
  sequelize,
  Microcontroller,
  Module,
  ModuleDetail,
  Sensor,
  SensorValue,
  Status,
};
