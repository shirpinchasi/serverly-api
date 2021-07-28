const server = require("../models/server")

class Servers {

async getAll(req ,res) {
    const regex = new RegExp(".*" + req.query.Name + ".*");
    try{
        const servers = await server
            .find({Name : regex})
            .select(["ipAddress","Name", "serverType","price","isRunning"])
        res.json(servers)
    }catch(err){
        res.status(500).json(err)
    }
}
}

module.exports = new Servers();