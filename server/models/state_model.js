
var mongoose = require('mongoose');

var stateModel = function () {
    var stateSchema = mongoose.Schema({
        state_name: {
            type: String,
            required: [true]
        }
    })

    return mongoose.model('states', stateSchema, 'states');
}

module.exports = new stateModel();

