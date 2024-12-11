const { DataTypes } = require("sequelize");
const sequelize = require("../utils/database");

const Module = sequelize.define('Module', {
  id: {
    type: DataTypes.TINYINT,
    primaryKey: true,
    autoIncrement: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  microcontroller_id: {
    type: DataTypes.TINYINT,
    allowNull: false
  },
});

module.exports = Module;
