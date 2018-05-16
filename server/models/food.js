'use strict';
module.exports = (sequelize, DataTypes) => {
  var food = sequelize.define('food', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    price: DataTypes.FLOAT,
    type: DataTypes.INTEGER,
    name: DataTypes.STRING,
    tva: DataTypes.INTEGER
  }, {});
  food.associate = function(models) {
    // associations can be defined here
  };
  return food;
};