const express = require("express");
require("./src/models/db")
const routes = require("./src/routes/handler")
const app = express()
app.use(express.urlencoded({extended:false}));
app.use(express.json())
const PORT = 4000;
app.listen(PORT, () =>{
  console.log(`server is running on port ${PORT}.`);
});
app.use(routes)




app.use("/handler/", require("./src/routes/handler"));
app.use("/handler/addServer", require("./src/routes/handler"));
app.use("/handler/deleteServer/:id", require("./src/routes/handler"));
app.use("/handler/updateServer/:id", require("./src/routes/handler"));
  
  

module.exports= app