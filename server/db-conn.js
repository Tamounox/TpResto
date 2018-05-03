function getConnection() {

    const Sequelize = require('sequelize');
    const sequelize = new Sequelize('tp_resto', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },

    });
    //test connexion sql
    sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        return sequelize;
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
        throw(err);
    });
}
    // Or you can simply use a connection uri
    // const sequelize = new Sequelize('postgres://user:pass@example.com:5432/dbname');
    

exports.getConnection = getConnection;