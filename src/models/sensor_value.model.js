const { DataTypes } = require("sequelize");
const sequelize = require("../utils/database");
const Sensor = require("./sensor.model");

const SensorValue = sequelize.define("SensorValue", {
  id: {
    type: DataTypes.BIGINT,
    primaryKey: true,
    autoIncrement: true,
  },
  value: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
  },
  unit: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

module.exports = SensorValue;
