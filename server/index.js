var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    config = require("./config/");

require("./models/User");
require("./models/JobSite");
require("./models/Group");

mongoose.connect(config.mongo_uri);

app.use(bodyParser.json());

require("./routes/userRoutes")(app);
require("./routes/groupRoutes")(app);
require("./routes/jobSiteRoutes")(app);

app.get("/health", (req, res) => {
    res.statusCode = 200;
    res.send("Everything's looking good over here!");
});

port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log("Server running on port: ", port);
});