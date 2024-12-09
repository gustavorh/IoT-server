const { DataTypes } = require("sequelize");
const sequelize = require("../utils/database");

const Sensor = sequelize.define("Sensor", {
  id: {
    type: DataTypes.TINYINT,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Sensor;
