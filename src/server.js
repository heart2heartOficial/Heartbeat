import url from "url";
import path from "path";
import { createServer } from "http";

import express from "express";

// Importar a biblioteca Socket.IO
import { Server } from "socket.io";

/*
Socket.io é composta de duas partes:

+ Server
+ E uma biblioteca para o cliente que carrega no navegador 

*/

const app = express();
const server = createServer(app);

const port = process.env.port || 3_006;

// Caminho absoluto do computador
const atualPath = url.fileURLToPath(import.meta.url);
const publicDirector = path.join(atualPath, "../..", "public");

// Oferece os arquivos de forma estatica
app.use(express.static(publicDirector));

/*
Soket é uma boa solução para problemas que envolvem comunicação
bidirecional em tempo real entre o cliente e o servidor
*/

server.listen(
    port,
    () => console.log(`Server listening in port ${port}`)
);

const io = new Server(server);

export default io;

