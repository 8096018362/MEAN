'use strict';
var mongoose = require('mongoose');

var distModel = function() {
    var distSchema = mongoose.Schema({
        state_id: {
            type: String,
            required: [true]
        },
        dist_name: {
            type: String,
            required: [true]
        }
    })

    return mongoose.model('dists', distSchema, 'dists');
}

module.exports = new distModel();

