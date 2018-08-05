const mongoose = require("mongoose");

const GroupModel = mongoose.model("groups");
const UserModel = mongoose.model("users");
const JobSiteModel = mongoose.model("jobSites");

module.exports = app => {
    app.get("/api/groups", async (req, res) => {
        const groups = await GroupModel.find();
        res.send(JSON.stringify(groups));
    });

    app.get("/api/groups/:number", (req, res, next) => {
        const groupNumber = req.params.number;
        GroupModel.find({ number: groupNumber }, (group, err) => {
            if (err) {
                next(err);
            } else {
                res.send(JSON.stringify(group));
            }
        })
    });

    app.post("/api/groups", async (req, res, next) => {
        let { number, userIds, jobSiteIds } = req.body;

        try {
            const users = await UserModel.find({ "_id": { $in: userIds } });

            let jobSites;
            if (jobSiteIds) {
                jobSites = await JobSiteModel.find({ "_id": { $in: jobSiteIds } });
            }
            
            if (!number) {
                docs = await GroupModel.findMax();
                number = docs[0].number + 1;
            }

            let newGroup = new GroupModel({
                number,
                users,
                jobSites
            });

            await newGroup.save();
            
            res.statusCode = 200;
            res.send("Group added successfully\n");
        } catch (err) {
            next(err);
        }
    });

    // Update group
    app.put("/api/groups/:id", async (req, res, next) => {
        let groupId = req.params.id;
        let { number, userIds, jobSiteIds } = req.body;

        try {
            let updatedGroup = await GroupModel.findByIdAndUpdate(groupId, {
                number, userIds, jobSiteIds
            }, { new: true });

            res.send(updatedGroup);
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