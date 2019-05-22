//dependencies 
const express = require('express');
let friends = require("../data/friend");
let router = express.Router();




router.get("/friends", function (req, res) {
    
    return res.json(friends);
});



module.exports = router; 