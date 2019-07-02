var path = require("path");

module.export = function(app) {
  // Survey HTML Path
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../app/public/survey.html"));
  });
  //   View HTML Path
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../app/public/view.html"));
  });
};
