const { DataTypes } = require("sequelize");
const sequelize = require("../utils/database");
const Status = require("./status.model");

const Microcontroller = sequelize.define("Microcontroller", {
  id: {
    type: DataTypes.TINYINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ip: {
    type: DataTypes.STRING(15),
    allowNull: false,
  },
});

module.exports = Microcontroller;
