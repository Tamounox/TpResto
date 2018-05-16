console.log('tameredeviceready')

var socket = io("http://192.168.1.84:3000");

socket.emit('recieve','Entree')

socket.on('send', function (type, entrees) {
    console.log(entrees);
    entrees.forEach(function(entree){
        $('#listeEntree').prepend('<li>' + entree.id+ '  ' + entree.name + '</li>');
    })
    
})