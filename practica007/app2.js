const express = require('express');
const app = express();



app.get('/data/alumnos', (req, res)=>{
    res.send("hola");
});

app.listen(3000, (err)=>{
    console.log("Corriendo en el puerto 3000");
});