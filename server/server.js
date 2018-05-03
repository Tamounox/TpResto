var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var i 
var commandes = []
const conn = require('./db-conn').getConnection();




io.on('connection', function (socket) {


    var commandeEnvoye

    app.get('/', (req, res) => {
        res.render('home.ejs')
    });

    app.get('/serveur', (req, res) => {
        res.render('serveur.ejs')
    });

    app.get('/cuisine', (req, res) => {
        res.render('cuisine.ejs')
    });

    app.get('/caisse', (req, res) => {
        res.render('caisse.ejs')
      });

      //Emission d'un evenement envois d'une commande 
    for (i = 0; i < commandes.length; i++) {
        socket.emit('commande-push', commandes[i]);
    }

});

// socket.on('commande-push', function (commande){
//     // Vérification que la commande n'existe pas
//     var commandeIndex = -1;
//     for (i = 0; i < commandes.length; i++) {
//       if (commandes[i].c_name === commande.c_name) {
//         commandeIndex = i;
//       }
//     }
//     if (commande !== commandeEnvoye && commandeIndex === -1) { // S'il est bien nouveau
//     // Sauvegarde de la commande et ajout à la liste des ccommandes -> il faut le mettre dans la bdd
//     commandeEnvoye = commande;
//     commandes.push(commandeEnvoye);

// }})



http.listen(8080, function(){
    console.log('Server is listening on *:8080');
  });

