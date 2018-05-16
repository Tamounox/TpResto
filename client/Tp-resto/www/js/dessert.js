console.log('tameredeviceready')

var socket = io("http://192.168.1.84:3000");

socket.emit('recieve','Dessert')

socket.on('send', function (type, desserts) {
    console.log(desserts);
    desserts.forEach(function(dessert){
        $('#listeDessert').prepend('<li>' + dessert.id+ '  ' + dessert.name + '</li>');
    })
    
})