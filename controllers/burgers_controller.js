//requiremnets
var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");

//redirect homepage to burger by default
router.get('/', function (req, res) {
    res.redirect("/burger")
});

//render the now reidrected page, gathering all open data
router.get("/burger", function (req, res) {
    burgers.all(function (data) {
        var hbrObj = {
            burgers: data
        };
        res.render("index", hbrObj);
    });
});

//add new burger to database
router.post("/burger/create", function (req, res) {
    burgers.create(req.body.burger_name, function (result) {
            res.redirect("/burger")
        });
});

//update burger to database
router.post("/burger/update/:id", function (req, res) {
    burgers.update(req.params.id, function (result) {
        res.redirect("/burger");
    });
});

//delete

module.exports = router;