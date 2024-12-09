const { DataTypes } = require("sequelize");
const sequelize = require("../utils/database");
const Module = require("./module.model");
const Sensor = require("./sensor.model");

const ModuleDetail = sequelize.define("ModuleDetail", {
  id: {
    type: DataTypes.TINYINT,
    primaryKey: true,
    autoIncrement: true,
  },
  quantity: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
});

module.exports = ModuleDetail;
