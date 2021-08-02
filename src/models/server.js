const mongoose = require("mongoose");



var Servers = new mongoose.Schema({
    serverIp : {
        type : String,
        // required : "This field is required",
    },
    serverName : {
        type : String,
        // required : "This field is required",
    },
    serverType : {
        serverTypeName : {
            type : String,
            // required : "This field is required",
        },
        serverTypePrice:{
            type: Number,
            
            
        },
    },
    
    isRunning : {
        type : Boolean,
    }
});

module.exports =  mongoose.model("Server", Servers)