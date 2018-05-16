var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var i
var commandes = []
const conn = require('./db-conn').getConnection();
const Food = require('./models').food;


io.on('connection', function (socket) {


    console.log("connecté a socket")

    socket.on('recieve', function (item) {
        Food.findAll({
            where: {
                type: item
            }
        }).then(function (results) {
            socket.emit('send',item, results)
        });
    })

    //Emission d'un evenement envois d'une commande 
    for (i = 0; i < commandes.length; i++) {
        socket.emit('commande-push', commandes[i]);
    }

});





http.listen(3000, function () {
    console.log('Server is listening on *:3000');
});