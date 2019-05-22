//dependencies 
const express = require('express');

const friends = require("../data/friend")
let routerAPI = express.Router();


//api display

 routerAPI.get("/api/friends", function(req, res) {
    return res.json(friends);
  });



  module.exports = routerAPI; 