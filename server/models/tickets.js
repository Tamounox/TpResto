'use strict';
module.exports = (sequelize, DataTypes) => {
  var tickets = sequelize.define('tickets', {
    id: DataTypes.INTEGER,
    table: DataTypes.INTEGER
  }, {});
  tickets.associate = function(models) {
    // associations can be defined here
  };
  return tickets;
};