// dependencies 
const express = require("express");
const path = require("path");

// runs express
const app = express(); 
const PORT = 3000; 

const router = require("./app/routing/htmlroutes")
const routerAPI = require("./app/routing/apiRoutes")

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router)
app.use("/survey", router)
app.use("/api/friends", routerAPI)

app.listen(PORT, function(){
    console.log("Connected to " + PORT)


}); 



