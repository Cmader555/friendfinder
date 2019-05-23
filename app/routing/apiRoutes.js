//dependencies 
const express = require('express');
let friends = require("../data/friend");
let router = express.Router();




router.get("/friends", function (req, res) {

    return res.json(friends);
});


router.post("/friends", function (req, res) {

    let newFriends = req.body;

    let user = parseInt(newFriends.scores); 

    let matchName; 
    let matchPhoto; 

    //value to be changed later
    let totalDifference =100; 
    let difference = 0; 

    for (let  i = 0; i < friends.length; i++ ) {

        for (let j = 0; j <user.length; j++) {

            difference += Math.abs(friends[i].scores[j] - user[j])


        }

        if (difference < totalDifference) {

            totalDifference = difference; 
            matchName = friends[i].name; 
            matchPhoto = friends[i].photo; 
        }


    }

    friends.push(newFriends);
    res.json({matchName:matchName, matchPhoto:matchPhoto});

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