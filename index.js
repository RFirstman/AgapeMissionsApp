var express = require("express"),
    app = express(),
    mongoose = require("mongoose"),
    bodyParser = require("body-parser"),
    config = require("./config/");

require("./models/User");
require("./models/JobSite");
require("./models/Group");
require("./models/Admin");

mongoose.connect(config.mongo_uri);

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

require("./routes/userRoutes")(app);
require("./routes/groupRoutes")(app);
require("./routes/jobSiteRoutes")(app);
require("./routes/adminRoutes")(app);

app.get("/health", (req, res) => {
    res.statusCode = 200;
    res.send("Everything's looking good over here!");
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
    })
}

port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log("Server running on port: ", port);
});