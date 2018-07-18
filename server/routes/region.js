var regionController = require('../controllers/region-controller')


var REGION = {

    addStates: function(req, res) {
        var reqBody = req.body;
        regionController.addNewState(reqBody, function(CtrlRes, err) {
            if (CtrlRes) {
                return res.json(CtrlRes);
            } else {
                return res.json(err);
            }
        })
    },
    getAllStates: function(req, res) {
        regionController.getAllStates(req, function(CtrlRes, err) {
            if (CtrlRes) {
                return res.json(CtrlRes);
            } else {
                return res.json(err);
            }
        })
    },
    addDist: function(req, res) {
        var reqBody = req.body;
        regionController.addNewDist(reqBody, function(CtrlRes, err) {
            if (CtrlRes) {
                return res.json(CtrlRes);
            } else {
                return res.json(err);
            }
        })
    },
    getAllDists: function(req, res) {
        regionController.getAllDists(req, function(CtrlRes, err) {
            if (CtrlRes) {
                return res.json(CtrlRes);
            } else {
                return res.json(err);
            }
        })
    },

    addTown: function(req, res) {
        var reqBody = req.body;
        regionController.addNewTown(reqBody, function(CtrlRes, err) {
            if (CtrlRes) {
                return res.json(CtrlRes);
            } else {
                return res.json(err);
            }
        })
    },

    getAllTowns: function(req, res) {
        regionController.getAllTowns(req, function(CtrlRes, err) {
            if (CtrlRes) {
                return res.json(CtrlRes);
            } else {
                return res.json(err);
            }
        })
    },



}


module.exports = REGION;


