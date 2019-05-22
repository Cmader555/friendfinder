// dependencies 
const express = require("express");
const path = require("path");

// runs express
const app = express(); 
const PORT = 3000; 

const {router} = require("./app/routing")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router)

app.listen(PORT, function(){
    console.log("Connected to " + PORT)


}); 


app.get("/", function(req,res){
    res.send("Hello World")


}); 

