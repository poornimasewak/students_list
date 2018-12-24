var db = require("../models");
module.exports = function (app) {
    app.post("/addnewstudent", function (req, res) {
        // console.log(req.body);
        db.Student.create(req.body).then(function (data) {
            res.redirect("/")
        })
    });

    app.get("/studentlist", function (req, res) {
        db.Student.findAll({}).then(function (data) {
            // console.log(data[0].name);
            res.render("studentList", { students: data })

        })
    })
}