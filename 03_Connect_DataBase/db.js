let mongoose = require('mongoose')

let url = "mongodb://localhost:27017/hotels"

mongoose.connect(url,{
    // ! used for ensure work with mongodb latest verson .
    useNewUrlParser:true,
    useUnifiedTopology: true 
})

const db = mongoose.connection  // ! used for eastablished  b/w  MongoDb server and node.js

db.on('connected',()=>{
    console.log("Connected to MongoDb server");
})
db.on('error',(err)=>{
    console.error("MongoDb connection Error : ", err);
})

db.on('disconnected', ()=>{
    console.log("MongoDb server Disconnected");
})

module.exports= db;