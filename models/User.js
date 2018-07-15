const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    group: { type: Number, required: true }
});

userSchema.methods.fullName = function fullName() {
    return this.firstName + " " + this.lastName;
}

mongoose.model("users", userSchema);

module.exports = userSchema;