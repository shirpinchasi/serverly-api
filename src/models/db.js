const mongoose = require("mongoose")


mongoose.connect("mongodb://localhost:27017/serverly",{
    useNewUrlParser:true,
    useUnifiedTopology: true
},
err => {
    if(!err){
        console.log("connection succeeded");
    }else{
        console.log("Error in connection" +err);
    }
})

require("./server")