const sequelize = require("../utils/database");
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  return sequelize.define('Microcontroller', {
    id: {
      type: DataTypes.TINYINT,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status_id: {
      type: DataTypes.TINYINT,
      allowNull: false
    },
    ip: {
      type: DataTypes.STRING(15),
      allowNull: false
    }
  });
};