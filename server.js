/**
 * @author Carlos Briceño
 * App: Server
 * 
 * Structuring Your Files
 * ========================
 * /GUI-face
      /server.js
      /build
         /index.html
         /emoji
         /js
         /css
         /media
 */
const express      = require('express');
const http         = require('http');

const app=express();
app.use(express.static(__dirname + '/build/'));
app.use(express.static(__dirname + '/build/js'));
app.use(express.static(__dirname + '/build/css'));
app.use(express.static(__dirname + '/build/emoji'));

app.get('/', function (req, res) {
    res.sendFile("/build/index.html", {});
});

const server = http.createServer(app);

server.listen(8080, function listening() {
    console.log("Web server Active listening on " + server.address().port);
});