//dependencies 
const express = require('express');
let friends = require("../data/friend");
let router = express.Router();




router.get("/friends", function (req, res) {

    return res.json(friends);
});


router.post("/friends", function (req, res) {

    let newFriends = req.body;

    friends.push(newFriends);
    //res.json(true);


});




module.exports = router;


















// module.exports = function (app) {

//     app.get("/api/friends", function (req, res) {

//          res.json(friends);
//     });

//     app.post("/api/friends", function (req, res) {

//         let newFriends = req.body; 

//         friends.push(newFriends);
//         //res.json(true);


//     });



// }; 