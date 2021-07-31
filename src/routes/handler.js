const express = require("express");
var url = "mongodb://localhost:27017/";
var MongoClient = require('mongodb').MongoClient;
const bodyParser = require("body-parser")
const mongoose = require("mongoose");
const Server = mongoose.model("Server")
const app = express()
const mongodb = require('mongodb');
app.use(express.urlencoded({extended:false}));
app.use(express.json())




app.get("/",(req,res)=> {
    Server.find((err, docs)=>{
      if(!err){
          res.send(docs)
          
      }else{
          console.log("not getting info : " +err);
      }

    })
})


app.post("/addServer", (req, res)=>{
    const newServer = new Server(req.body);
    try{
        console.log(req.body);
        const createServer =  newServer.save();
        res.status(201).json(createServer);
        console.log(newServer);
    }catch(err){
        if(err.code === 11000){
            res.sendStatus(409);
            return;
        }
        res.sendStatus(500)
    }
})
app.delete('/deleteServer/:id', (req, res) => {
    MongoClient.connect(url, (err,db) => {
    if (err) throw err;
    let dbo = db.db("serverly")
    dbo.collection('servers').deleteOne({_id: mongodb.ObjectID( req.params.id)}, (err, result) => {
      if (err) return console.log(err)
      console.log(req.body)
      
    })
    })
  })
  app.put('/updateServer/:id', (req, res) => {
    MongoClient.connect(url, (err,db) => {
    if (err) 
    {
        throw err;
    }
    let dbo = db.db("serverly")
    console.log(req);
    console.log(req.body);
    console.log(req.body.serverName);
    dbo.collection('servers').findOneAndUpdate({_id: mongodb.ObjectID(req.params.id)}, {$set: {serverName: req.body.serverName}}, (err, result) => {
      if (err) 
      {
        console.log(err)
      }
    console.log(req.body)
    console.log(result); 
    })
    })
  })







module.exports = app;