
const jwt = require("jsonwebtoken");


function vericarToken(req, res, next){

    let token = req.get("token");

    jwt.verify(token, 'secret-juan-tony', function (err, decoded) {
        if(err){
            return res.send("te envie al login");
        }
        console.log(decoded)
        req.username = decoded.data.username;
        next();
    });

}

module.exports = {
    vericarToken
};





