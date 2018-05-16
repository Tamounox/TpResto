console.log('tameredeviceready')

var socket = io("http://192.168.1.84:3000");

socket.emit('recieve','Plat')

socket.on('send', function (type, plats) {
    console.log(plats);
    plats.forEach(function(plat){
        $('#listePlat').prepend('<li>' + plat.id+ '  ' + plat.name + '</li>');
    })
    
})