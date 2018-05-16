'use strict';
module.exports = (sequelize, DataTypes) => {
  var table = sequelize.define('table', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },  
    nbr_couvert: DataTypes.INTEGER
  }, {});
  table.associate = function(models) {
    // associations can be defined here
  };
  return table;
};