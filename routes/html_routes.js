module.exports = function (app) {
    app.get("/", function (req, res) {
        res.render("home");
    });
    app.get("/addnewstudent", function (req, res) {
        res.render("addStudent");
    });
}