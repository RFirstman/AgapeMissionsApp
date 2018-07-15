const mongoose = require("mongoose");

const JobSiteModel = mongoose.model("jobSites");

module.exports = app => {
    app.get("/api/jobSites", async (req, res) => {
        const jobSites = await JobSiteModel.find().limit(50);
        res.send(JSON.stringify(jobSites));
    });

    app.get("/api/jobSites/:id", (req, res, next) => {
        const jobSiteId = req.params.id;
        JobSiteModel.findById(jobSiteId, (jobSite, err) => {
            if (err) {
                next(err);
            } else {
                res.send(JSON.stringify(jobSite));
            }
        });
    });

    // Create a new job site
    app.post("/api/jobSites", async (req, res, next) => {
        let { name, address, city, state, phone } = req.body;

        try {
            const newJobSite = new JobSiteModel({
                name,
                address,
                city,
                state,
                phone
            });

            await newJobSite.save();

            res.statusCode = 200;
            res.send("Job site added successfully\n");
        } catch (err) {
            next(err);
        }
    });

    // Update a job site
    app.put("/api/jobSites/:id", async (req, res, next) => {
        let jobSiteId = req.params.id;
        let { name, address, city, state, phone } = req.body;

        try {
            let updatedJobSite = await JobSiteModel.findByIdAndUpdate(jobSiteId, {
                name, address, city, state, phone
            }, { new: true });

            res.send(updatedJobSite);
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