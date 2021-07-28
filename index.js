const http = require('http');
const hostname = '127.0.0.1';




const express = require("express");
const mongoose = require("mongoose");
const routes = require("./src/routes");
const config =require("./src/env/development");
const app = express();
const port = config.port;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Access-Control-Request-Headers");
    res.end('Hello World');
  });
  
  server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });


app.use(routes)

connect();

function connect() {
    mongoose.connect(config.dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology : true
    });
    const db = mongoose.connection;
    db.on("error", err => console.log(err));
    db.once("open", listen);
}