const express = require("express");
const app = express();

const jwt = require("jsonwebtoken");
const port = 3000;
const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");


const { vericarToken } = require("./api/middleware/verificar-token");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('public'));

let pass = "$2b$10$Rx/XWVJ/c5YGhsQnu.JuVeqWc461cmdZ.s9fmbFIhK4hSEXuaGMpK";

app.get('/get/passsword/:pass', (req, res)=>{
    console.log(req.params.pass);
    let password =  bcrypt.hashSync(req.params.pass, 10);
    console.log(password);
    res.json({ password });
});


app.get('/user/dashboard', vericarToken, (req, res)=>{

    res.send("página principal " + req.username);

});

app.get('/get/comprobacion/:pass', (req, res)=>{


    let passin = req.params.pass;
    console.log(passin);
    let comp = bcrypt.compareSync(passin, pass)// res == true

    console.log(comp);

    if (!comp){
        return res.json({
            status: 0,
            msj: "Usuario o Contraseña incorrecta"
        });
    }

    let token = jwt.sign(
    {
        data: {
            username: "tony09",
            email: "tony09@gmail.com"
        }
    }, 'secret-juan-tony', { expiresIn: '1h' });

    return res.json({
        status: 1,
        token
    });

});

app.listen(port, ()=>{
    console.log("server corriendo");
});






