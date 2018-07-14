const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    number: { type: Number, required: true },
    users: [{
        type: Mongoose.Schema.ObjectId, ref: "users",
        required: true
    }],
    jobSites: [{
        type: Mongoose.Schema.ObjectId, ref: "jobSites"
    }]
});

mongoose.model("groups", groupSchema);