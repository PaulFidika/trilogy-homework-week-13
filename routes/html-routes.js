const db = require("../models")
const express = require('express')
const router = express.Router()

// define the home page route
router.get('/', function (req, res) {
    res.render('index', { layout: 'main' });
})

router.post('/', function (req, res) {
    res.render('index', { layout: 'main' });
})

module.exports = router