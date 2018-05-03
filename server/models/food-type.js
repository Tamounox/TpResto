'use strict';
module.exports = (sequelize, DataTypes) => {
  var food - type = sequelize.define('food-type', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    tva: DataTypes.INTEGER
  }, {});
  food - type.associate = function(models) {
    // associations can be defined here
  };
  return food - type;
};