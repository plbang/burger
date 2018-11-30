var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js")

// First Route: render index
router.get('/', function(req, res) {
    res.render('index');
})

// Export routes for use in server.js
module.exports = router;