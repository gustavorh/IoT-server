const sequelize = require("../utils/database");
const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Module", {
    id: {
      type: DataTypes.TINYINT,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    microcontroller_id: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
  });
};
