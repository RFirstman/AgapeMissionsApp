const mongoose = require("mongoose");
const UserModel = mongoose.model("users");

module.exports = app => {
    app.get("/users", async (req, res) => {
        const users = await UserModel.find().limit(10);
        res.send(JSON.stringify(users));
    });

    app.post("/users", (req, res) => {
        let { firstName, lastName, group } = req.body;    
        
        let newUser = new UserModel({
            firstName,
            lastName,
            group
        });
        
        newUser.save((err) => {
            if (err) {
                res.statusCode = 500;
                res.send("Error adding user: ", err);
            } else {
                res.statusCode = 200;
                res.send("User added successfully\n");
            }
        });
    });
}