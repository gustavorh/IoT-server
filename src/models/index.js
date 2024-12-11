const sequelize = require("../utils/database");

const Microcontroller = require('./microcontroller.model');
const Status = require('./status.model');
const Module = require('./module.model');
const ModuleDetail = require('./module_detail.model');
const Sensor = require('./sensor.model');
const SensorValue = require('./sensor_value.model');

function setupAssociations(models) {
  // Associations
  models.Microcontroller.hasOne(models.Status, { foreignKey: 'id', sourceKey: 'status_id' });
  models.Microcontroller.hasMany(models.Module, { foreignKey: 'microcontroller_id' });

  models.Module.belongsTo(models.Microcontroller, { foreignKey: 'microcontroller_id' });
  models.Module.hasMany(models.ModuleDetail, { foreignKey: 'module_id' });

  models.ModuleDetail.belongsTo(models.Module, { foreignKey: 'module_id' });
  models.ModuleDetail.hasMany(models.Sensor, { foreignKey: 'id', sourceKey: 'sensor_id' });

  models.Sensor.belongsToMany(models.ModuleDetail, { through: 'ModuleDetail', foreignKey: 'sensor_id', otherKey: 'module_id' });
  models.Sensor.hasMany(models.SensorValue, { foreignKey: 'sensor_id' });

  models.SensorValue.belongsTo(models.Sensor, { foreignKey: 'sensor_id' });
}

module.exports = {
  Microcontroller,
  Status,
  Module,
  ModuleDetail,
  Sensor,
  SensorValue
};