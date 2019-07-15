var friendsData = require("../app/data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("/api/friends", function(req, res) {
    var newfriend = req.body;
    var newFriendScore = req.body.scores;

    var lastDiff = 41;
    var friendNum = 0;

    for (var i = 0; i < friendsData.length; i++) {
      var totalDiff = 0;

      for (var j = 0; j < newFriendScore.length; j++) {
        if (newFriendScore[j] > friendsData[i].scores[j]) {
          var diffScore = newFriendScore[j] - friendsData[i].scores[j];
        } else if (newFriendScore[j] < friendsData[i].scores[j]) {
          var diffScore = friendsData[i].scores[j] - newFriendScore[j];
        }
        totalDiff += diffScore;
      }
      if (totalDiff < lastDiff) {
        lastDiff = totalDiff;
        friendNum = i;
      }
    }

    console.log(
      "You're best matched gamer-friend is: " + friendsData[friendNum].name
    );

    friendsData.push(newfriend);

    res.send(friendsData[friendNum]);
  });
};
