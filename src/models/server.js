const mongoose = require("mongoose");


const Servers = new mongoose.model("server" , {
    ipAddess : {
        type : String,
        required : true,
    },
    Name : {
        type : String,
        required: true
    },
    serverType : {
        type : String,
        required: true,
    },
    price:{
        type: Number
    },
    isRunning : {
        type : Boolean,
    }
});

module.exports = Servers;