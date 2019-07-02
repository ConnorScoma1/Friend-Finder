var friendsData = require("../app/data/friends");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friendsData);
  });

  app.post("api/friends", function(req, res) {
    var newFriend = req.body;
    var friendScore = req.body.scores;

    var lastDiff = 41;
    friendNum = 0;

    for (var i = 0; i < friendsData.length; i++) {
      var totalDiff = 0;
      for (var j = 0; j < newFriendScore.length; j++) {
        if (newFriendScore[j] > friendsData[i].scores[j]) {
          var diffScore = newFriendScore[j] - friendsData[i].scores[j];
        } else if (newFriendScore < friendsData[i].scores[j]) {
          var diffScore = friendsData[i].scores[j] - newFriendScore[j];
        }
        totalDiff += diffScore;
      }
      if (totalDiff < lastDiff) {
        lastDiff = totalDiff;
        friendNum[i];
      }
    }

    console.log("Your Best Matched Friend is " + friendsData[friendNum].name);

    friendsData.push(newFriend);

    res.send(friendData[friendNum]);
  });
};
