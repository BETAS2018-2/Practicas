
const express = require("express");
const app = express();
const socketIO = require("socket.io");
const path = require("path"); 
const http = require("http");
const port = process.env.PORT || 3000;
const publicPth = path.resolve(__dirname + "/public");


let server = http.createServer(app);

let io = socketIO(server);

app.use(express.static(publicPth));


io.on("connection", (client) => {
    console.log("alguien se ha conectado");

    client.on("mensajeNuevo", (data, callback)=>{
        console.log(data);
        client.broadcast.emit("mensajeNuevo", {
            usuario: data.usuario,
            mensaje: data.mensaje
        });
        callback(data);
    });

    client.on("usuarioNuevo", (data)=>{
        client.broadcast.emit("usuarioNuevo", {
            usuario: "Servidor",
            mensaje: `${data.usuario}: se ha unido`
        });
    });

    client.on("escribiendo", (usuario) => {
        usuario = usuario.usuario;
        client.broadcast.emit("escribiendo", { usuario });
    });

});

server.listen(port, ()=>{
    console.log(`Corriendo en el puerto ${port}`);
});
