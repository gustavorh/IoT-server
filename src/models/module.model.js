const { DataTypes } = require("sequelize");
const sequelize = require("../utils/database");
const Microcontroller = require("./microcontroller.model");
const ModuleDetail = require("./module_detail.model")

const Module = sequelize.define("Module", {
  id: {
    type: DataTypes.TINYINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Module;
