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

groupSchema.statics.findMax = function() {
    return this.find().sort({"number": -1}).limit(1)
}

mongoose.model("groups", groupSchema);

const GroupModel = mongoose.model("groups");