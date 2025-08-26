import io from "./server.js";

/*
Inicializa uma nova instancia do sokcet.io passando server vomo objeto

ID: cada conexão possui um id próprio
*/
io.on('connection', (socket) => {
    console.log('A user connected, ID: ', socket.id);

    socket.on("text", (text) => {
            //console.log(text)
        // Emitir para todos os clientes (Multicast)
        //io.emit("text_client", text);

        socket.broadcast.emit("text_client", text);
    });

 
});

