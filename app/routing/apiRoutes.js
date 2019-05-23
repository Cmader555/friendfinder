//dependencies 
const express = require('express');
let friends = require("../data/friend");
let router = express.Router();



//Actual API, displays all friends objects in JSON format
router.get("/friends", function (req, res) {

    return res.json(friends);
});

// posting new person to friends API/comparing "friends" for closest match
router.post("/friends", function (req, res) {


    let newFriends = req.body;



    //let user = parseInt(newFriends.scores);


    let matchName;
    let matchPhoto;


    let totalDifference = 100;
   


    for (let i = 0; i < friends.length; i++) {


       
        let difference = 0;

        for (let j = 0; j < friends[i].scores.length; j++) {


            difference += Math.abs(friends[i].scores[j] - parseInt(req.body.scores[j])); 
            console.log("j loop diff" + difference)
        }


        if (difference < totalDifference) {

            totalDifference = difference;
            console.log("total" + totalDifference)
            matchName = friends[i].name;
            matchPhoto = friends[i].photo;
        }


    }


    friends.push(newFriends);
    res.json({ matchName: matchName, matchPhoto: matchPhoto });

});




module.exports = router;

