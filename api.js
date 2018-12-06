const express = require('express'),
    api = express.Router(),
    electricity = require('./api/electricity'),
    expedition = require('./api/expedition'),
    food = require('./api/food'),
    people = require('./api/people'),
    world = require('./api/world');

api.use('/electricity', electricity);

module.exports = api;