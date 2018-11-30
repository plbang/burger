var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js")

// Render index
router.get('/', function(req, res) {
    res.render('index');
})

module.exports = router;