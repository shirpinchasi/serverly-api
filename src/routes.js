const servers = require("./controllers/setServers")
const express = require("express");

const routes = express.Router();

routes.get("/servers",servers.getAll)


module.exports = routes;