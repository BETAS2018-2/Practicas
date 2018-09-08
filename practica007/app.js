const http = require('http');

http.createServer((req, res) => {

    res.writeHead(200, { 'Content-type': 'application/json' });

    res.write(JSON.stringify({"Tony": "hola"}));

    console.log(req.headers);
    res.end();
}).listen(3000, () => {
    console.log("escuchando...");
});