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

ModuleDetail.belongsTo(Module, {
  foreignKey: "module_id",
  as: "module",
});

ModuleDetail.belongsTo(Sensor, {
  foreignKey: "sensor_id",
  as: "sensor",
});

Module.belongsTo(Microcontroller, {
  foreignKey: "microcontroller_id",
  as: "microcontroller",
});

Module.hasMany(ModuleDetail, {
  foreignKey: "module_id",
  as: "module_detail",
});

SensorValue.belongsTo(Sensor, {
  foreignKey: "sensor_id",
  as: "sensor",
});

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
