
        console.log('tameredeviceready')
        // this.receivedEvent('deviceready');
        var socket = io("http://192.168.1.84:3000");
            socket.on('connection', function(){
                console.log("codova link");
            
            })
            socket.on ('sendPlat', function (plats){
                console.log(plats);
                $('#listePlat').prepend('<li>'+plats[0].id+'</li>'); 
            
            })
           
        
    

    // // Update DOM on a Received Event
    // receivedEvent: function(id) {
    //     var parentElement = document.getElementById(id);
    //     var listeningElement = parentElement.querySelector('.listening');
    //     var receivedElement = parentElement.querySelector('.received');

    //     listeningElement.setAttribute('style', 'display:none;');
    //     receivedElement.setAttribute('style', 'display:block;');

    //     console.log('Received Event: ' + id);
    // }
};

app.initialize();



// Socket.emit ('receivePlat',)

