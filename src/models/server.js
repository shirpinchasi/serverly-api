const mongoose = require("mongoose");



var Servers = new mongoose.Schema({
    serverIp : {
        type : String,
        required : "This field is required",
    },
    serverName : {
        type : String,
        required : "This field is required",
    },
    serverType : {
        type : String,
        required : "This field is required",
    },
    price:{
        type: Number,
        required : true
        
    },
    isRunning : {
        type : Boolean,
        required : true
    }
});

module.exports =  mongoose.model("Server", Servers)