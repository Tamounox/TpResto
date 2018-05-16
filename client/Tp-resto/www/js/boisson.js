console.log('tameredeviceready')

var socket = io("http://192.168.1.84:3000");

socket.emit('recieve','Boisson')

socket.on('send', function (type, boissons) {
    console.log(boissons);
   boissons.forEach(function(boisson){
        $('#listeBoisson').prepend('<li>' + boisson.id+ '  ' + boisson.name + '</li>');
    })
    
})