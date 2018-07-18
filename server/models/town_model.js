'use strict';
var mongoose = require('mongoose');
var dist = require('./dist_model')
var state = require('./state_model')

var townModel = function () {
    var townSchema = mongoose.Schema({
        town_name: {
            type: String,
            required: [true]
        },
        state_id: {
            type: String,
            required: [true]
        },
        dist_id: {
            type: String,
            required: [true]
        }
    })
    return mongoose.model('towns', townSchema, 'towns');
}

module.exports = new townModel();

