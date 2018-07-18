
var StateModel = require('../models/state_model');
var DistModel = require('../models/dist_model');
var TownModel = require('../models/town_model');

var mongoose = require('mongoose');

var REGIONCONTROLLER = {

    addNewState: (stateObj, callback) => {

        StateModel.findOne({ state_name: stateObj.state_name }, (err, state) => {
            if (err) {
                callback(null, { message: 'error in db' })
            }
            if (state) {
                callback(null, { message: 'state already Added' })
            } else {
                var stateData = stateObj;
                var state = new StateModel(stateData);
                state.save((err, stateData) => {
                    if (err) {
                        callback(null, ErrorTypes(err))
                    } else {
                        var obj = {
                            status: 'Success'
                        }
                        callback(obj, null)
                    }
                })
            }
        })
    },
    getAllStates: (res, callback) => {
        StateModel.find({}, (err, data) => {
            if (err) {
                callback(null, { message: 'error ' })
            } else {
                callback(data, null)
            }
        });
    },

    addNewDist: (distObj, callback) => {
        DistModel.findOne({ dist_name: distObj.dist_name, state_id: distObj.state_id }, (err, dist) => {
            if (err) {
                callback(null, { message: 'error in db' })
            }
            if (dist) {
                callback(null, { message: 'dist already Added' })
            } else {
                const dist = new DistModel({ dist_name: distObj.dist_name, state_id: distObj.state_id });
                dist.save((err, distData) => {
                    if (err) {
                        callback(null, FieldErrors(err))
                    } else {
                        var obj = {
                            status: 'Success'
                        }
                        callback(obj, null)
                    }
                })
            }
        })
    },
    getAllDists: (res, callback) => {
        DistModel.find({}, (err, data) => {
            if (err) {
                callback(null, { message: 'error ' })
            } else {
                callback(data, null)
            }
        });
    },

    addNewTown: (townObj, callback) => {
        TownModel.findOne({ town_name: townObj.town_name, state_id: townObj.state_id, dist_id: townObj.dist_id }, (err, town) => {
            if (err) {
                callback(null, FieldErrors(err))
            }
            if (town) {
                callback(null, { message: 'Town already Added' })
            } else {
                var townData = townObj;
                var town = new TownModel(townData);
                town.save((err, townData) => {
                    if (err) {
                        callback(null, ErrorTypes(err))
                    } else {
                        var obj = {
                            status: 'Success'
                        }
                        callback(obj, null)
                    }
                })
            }
        })

    },
    getAllTowns: (res, callback) => {
        TownModel.find({}, (err, data) => {
            if (err) {
                callback(null, { message: 'error ' })
            } else {
                callback(data, null)
            }
        });
    },

}

function ErrorTypes(err) {
    var errMessage = [];
    for (var errName in err.errors) {
        errMessage.push({ field: errName + ' is required' })
    }
    return errMessage;
}

module.exports = REGIONCONTROLLER;