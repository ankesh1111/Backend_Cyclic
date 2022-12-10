
const express = require("express");
require("dotenv").config()
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello India")
})


app.get("/name",(req,res)=>{
    res.send(`This name is ${process.env.NAME}`)
})



app.listen(9000,()=>{
    console.log("Listening on port")
})

