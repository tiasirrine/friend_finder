//linking data
var friendsData = require("../data/friends");
//exporting get function of data and POST for survey results
module.exports = function(app) {
  //shows data to the page when visited
  app.get("/api/data", function(req, res) {
    res.json(friendsData);
  });
  //pushes friends data to JS array (does this nees JSON?)
  app.post("/api/data", function(req, res) {
    //Comparing user with their best friend match

    //best match
    var matchData = {
      name: "",
      photo: "",
      friendDiff: 55
    };
    // the results into variables
    var userData = req.body;
    var userName = userData.name;
    var userPhoto = userData.photo;
    var userScores = userData.scores;

    var totalDifference = 0;
    //loop data
    for (var i = 0; i < friendsData.length; i++) {
      console.log(friendsData[i].name);
      totalDifference = 0;

      //loop scores
      for (var j = 0; j < friendsData[i].scores[j]; j++) {
        //simple maths using the score loops
        totalDifference += Math.abs(
          parseInt(userScores[j]) - parseInt(friendsData[i].scores[j])
        );

        //finds "Best" match
        if (totalDifference <= matchData.friendDiff) {
          // Reset the matchData to be the new friend.
          matchData.name = friendsData[i].name;
          matchData.photo = friendsData[i].photo;
          matchData.friendDiff = totalDifference;
        }
      }
    }

    // push new data to friendData
    friendsData.push(userData);

    // used by html
    res.json(matchData);
  });
};
