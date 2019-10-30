

module.exports = function (io) {


    let nicknames = [];

    io.on('connection', socket => {

        console.log("nuevo usuario conectado");

        socket.on('new user', (data, cb) => {
             

            if (nicknames.indexOf(data) != -1) {

                cb(false);
            } else {
                cb(true);
                socket.nickname = data;
                nicknames.push(socket.nickname);

            }

        })


        socket.on('send message', function(data){

          io.sockets.emit('new message', data);          
        });
        
        
    });


}
