const express = require('express'),
    api = express.Router(),
    electricity = require('./api/electricity'),
    expedition = require('./api/expedition'),
    food = require('./api/food'),
    world = require('./api/world');

api.use('/electricity', electricity);
api.use('/food', food);
api.use('/world', world);
api.use('/expedition', expedition);

module.exports = api;