const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PNF = require('google-libphonenumber').PhoneNumberFormat;
const phoneUtil = require('google-libphonenumber').PhoneNumberUtil.getInstance();

const jobSiteSchema = new Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    city: { type: String, required: true },
    state: { type: String, required: true },
    phone: {
        type: String,
        validate: {
            validator: function (v) {
                let number = phoneUtil.parseAndKeepRawInput(v, "US");
                return phoneUtil.isValidNumber(number);
            },
            message: '{VALUE} is not a valid phone number!'
        },
        required: [true, 'User phone number required']
    }
});


mongoose.model("jobSites", jobSiteSchema);

module.exports = jobSiteSchema;