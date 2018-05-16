var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var i 
var commandes = []
const conn = require('./db-conn').getConnection();


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


io.on('connection', function (socket) {

 
    console.log("connecté a socket")
    
    socket.on('recivePlat', function (){

            plats= Post.findAll({        
            where: {
                type: plat
            }
         });
        console.log(plats)

        socket.emit('sendPlat', plats) 

        
    
    });
    
   
      //Emission d'un evenement envois d'une commande 
    for (i = 0; i < commandes.length; i++) {
        socket.emit('commande-push', commandes[i]);
    }

});





http.listen(3000, function(){
    console.log('Server is listening on *:3000');
  });

