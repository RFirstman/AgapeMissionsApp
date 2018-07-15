const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = require("./User");
const jobSiteSchema = require("./JobSite");

const groupSchema = new Schema({
    number: { type: Number, required: true },
    users: [{
        type: userSchema,
        required: true
    }],
    jobSites: [{
        type: jobSiteSchema
    }]
});

mongoose.model("groups", groupSchema);