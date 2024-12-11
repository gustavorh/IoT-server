const { DataTypes } = require("sequelize");
const sequelize = require("../utils/database");

const ModuleDetail = sequelize.define('ModuleDetail', {
  id: {
    type: DataTypes.TINYINT,
    primaryKey: true,
    autoIncrement: true
  },
  module_id: {
    type: DataTypes.TINYINT,
    allowNull: false,
  },
  sensor_id: {
    type: DataTypes.TINYINT,
    allowNull: false
  },
  quantity: {
    type: DataTypes.TINYINT,
    allowNull: false
  }
}, {
  timestamps: true
});

module.exports = ModuleDetail;