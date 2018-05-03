'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('food', [{
      price: 18.00,
      type: 'Entree',
      name: 'Assiette de jambon serrano',
      tva:20
    },
    {
      price: 16.00,
      type: 'Entree',
      name: 'Camembert roti',
      tva:20
    },{
      price: 58.00,
      type: 'Plat',
      name: 'Côte de boeuf pour 2',
      tva:20
    },{
      price: 19.00,
      type: 'Plat',
      name: 'Tartare de boeuf',
      tva:20
    },{
      price: 14.00,
      type: 'Dessert',
      name: 'Irish coffee gourmand',
      tva:20
    },{
      price: 7.50,
      type: 'Dessert',
      name: 'Gauffre sauce chocolat',
      tva:20
    },{
      price: 3.50,
      type: 'Boisson',
      name: 'CocaCola',
      tva: 5.50
    },{
      price: 9.0,
      type: 'Boisson',
      name: 'Mojito',
      tva: 5.50
    }], {});
},
 
  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('food', null, {});
  }
};
