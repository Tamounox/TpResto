Socket.emit ('receivePlat',)

Socket.on ('sendPlat', plats){
    console.log(plats);
    $('#listePlat').prepend('<li>'+plats[0].id+'</li>'); 

};