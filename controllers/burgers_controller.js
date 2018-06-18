//requiremnets
var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");

//redirect homepage to burger by default
router.get('/', function (req, res) {
    res.redirect('/burger')
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
router.post('/burger/create', function (req, res) {
    burgers.create(['name', 'devoured'],
        [req.body.name, req.body.devoured], function () {
            res.redirect('/burger')
        });
});

//update burger to database
router.put('/burger/update/:id', function (req, res) {
    var condition = 'id = ' + req.params.id;
    console.log('condition', condition);
    burgers.update({ 'devoured': req.body.devoured }, condition, function () {
        res.redirect('/burger');
    });
});

//delete burger from database
router.delete("/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log('condition', condition);
    burgers.delete(condition, function () {
        res.redirect("/burger");
    });
});

module.exports = router;