'use strict';
module.exports = (sequelize, DataTypes) => {
  var food = sequelize.define('food', {
    id: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    type: DataTypes.INTEGER
  }, {});
  food.associate = function(models) {
    // associations can be defined here
  };
  return food;
};