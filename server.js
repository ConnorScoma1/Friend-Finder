var express = require("express");

var app = express();

var PORT = process.env.PORT || 8080;

// Express App Set Up
app.use(express.urlencoded({ extended: true }));
app.use(express.json);

app.use(express.static("app/public"));

// Router
require("./routing/apiRoutes")(app);
require("./routing/htmlRoutes")(app);

app.listen(PORT, () => {
  console.log("listening on PORT: " + PORT);
  console.log("http://localhost:" + PORT);
});
