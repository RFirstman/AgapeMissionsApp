const mongoose = require("mongoose");

const AdminModel = mongoose.model("admins");

module.exports = app => {
    app.post("/api/admin/login", async (req, res) => {
        let { email, password } = req.body;

        AdminModel.findOne({ email }, (err, doc) => {
            if (err) {
                res.sendStatus(404);
            } else if (password === doc.password) {
                res.send(doc);
            } else {
                res.sendStatus(403);
            }
        });

    });
}