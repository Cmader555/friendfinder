// dependencies 
const express = require("express");
const path = require("path");

// runs express
const app = express(); 
const PORT = process.env.PORT || 8080; 

const router = require("./app/routing/htmlroutes")
const routerAPI = require("./app/routing/apiRoutes")
  
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", router)
app.use("/api", routerAPI);
// require("./app/routing/htmlroutes")(app);
// require("./app/routing/apiroutes.js")(app);


app.listen(PORT, function(){
    console.log("Connected to " + PORT)


}); 





