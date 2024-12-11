const sequelize = require("../utils/database");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define('SensorValue', {
    id: {
      type: DataTypes.TINYINT,
      primaryKey: true
    },
    sensor_id: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    value: {
      type: DataTypes.DECIMAL(5, 2),
      allowNull: false
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
