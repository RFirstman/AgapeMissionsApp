const mongoose = require("mongoose");

const UserModel = mongoose.model("users");

module.exports = app => {
    app.get("/api/users", async (req, res) => {
        const users = await UserModel.find().limit(50);
        res.send(JSON.stringify(users));
    });

    app.get("/api/users/:id", (req, res, next) => {
        var userId = req.params.id;
        UserModel.findById(userId, (user, err) => {
            if (err) {
                next(err);
            } else {
                res.send(JSON.stringify(user));
            }
        });
    });

    // Create a new user
    app.post("/api/users", (req, res, next) => {
        let { firstName, lastName, group } = req.body;

        let newUser = new UserModel({
            firstName,
            lastName,
            group
        });

        newUser.save()
            .then(user => {
                res.send(user);
            })
            .catch(err => {
                next(err);
            });
    });

    // Update multiple users
    app.put("/api/users", async (req, res, next) => {
        let { userIds } = req.body

        try {
            let promises = userIds.map(id => (
                UserModel.findByIdAndUpdate(id, {
                    approved: true
                })
            ));
            await Promise.all(promises);
            res.send("Users approved successfully")
        } catch(err) {
            next(err);
        }
    })

    // Update an existing user
    app.put("/api/users/:id", async (req, res, next) => {
        let userId = req.params.id;
        let { firstName, lastName, group } = req.body;

        try {
            let updatedUser = await UserModel.findByIdAndUpdate(userId, {
                firstName, lastName, group
            }, { new: true });

            res.send(updatedUser);
        } catch (err) {
            // if(err.kind === 'ObjectId') {
            //     return res.status(404).send({
            //         message: "Note not found with id " + req.params.noteId
            //     });                
            // }
            // return res.status(500).send({
            //     message: "Error updating note with id " + req.params.noteId
            // });
            next(err);
        }
    });
}