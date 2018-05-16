'use strict';
module.exports = (sequelize, DataTypes) => {
  var tickets = sequelize.define('tickets', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    table: DataTypes.INTEGER
  }, {});
  tickets.associate = function(models) {
    // associations can be defined here
  };
  return tickets;
};