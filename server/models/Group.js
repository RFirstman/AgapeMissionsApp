const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    number: { type: Number, required: true },
    users: [{
        type: mongoose.Schema.ObjectId, ref: "users",
        required: true
    }],
    jobSites: [{
        type: mongoose.Schema.ObjectId, ref: "jobSites"
    }]
});

mongoose.model("groups", groupSchema);