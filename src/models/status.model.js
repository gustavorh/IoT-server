const sequelize = require("../utils/database");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define('Status', {
    id: {
      type: DataTypes.TINYINT,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
};
