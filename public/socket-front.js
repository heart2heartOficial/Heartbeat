import { updateText } from "./main.js";


const socket = io();

function emitText(text_client){
     // emit: Emite um evento

    /*
    Permite enviar qualquer dado serializável do JavaScript
        Pode se utilizar o métodos JSON.stringify() e JSON.parse()

    O Socket.io já faz a serialização



    */

    socket.emit("text", text_client);
}


socket.on("text_client", (text) => {
    console.log(text);
    updateText(text);
});


export { emitText }