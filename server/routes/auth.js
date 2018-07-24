var apiController = require('../controllers/api-controller')

var response = {
    status: "Success",
    message: null,
    data: []
}

var errorResponse = {
    status: "Failure",
    message: null
}

var AUTH = {

    userRegister: function(req, res) {
        var reqBody = req.body;
        apiController.userRegistration(reqBody, function(CtrlRes, err) {
            if (err) {
                errorResponse.message = err;
                return res.json(errorResponse);
            } else {
                response.message = "Successfully Registered";
                response.data = CtrlRes;
                return res.json(response);
            }
        })
    },

    userLogin: function(req, res) {
        var reqBody = req.body;
        apiController.loginUser(reqBody, function(CtrlRes, err) {
            if (err) {
                errorResponse.message = err;
                return res.json(errorResponse);
            } else {
                response.message = "Successfully Login";
                response.data = CtrlRes;
                return res.json(response);
            }
        })
    },

    userStatus: function(req, res) {
        var reqBody = req.body;
        apiController.userStatus(reqBody, function(CtrlRes, err) {
            if (err) {
                errorResponse.message = err;
                return res.json(errorResponse);
            } else {
                response.message = "User Details" + CtrlRes.status;
                response.data = CtrlRes;
                return res.json(response);
            }
        })
    },

    getAllUsers: function(req, res) {
        apiController.getAllUsers(req, function(CtrlRes, err) {
            if (err) {
                errorResponse.message = err;
                return res.json(errorResponse);
            } else {
                response.message = "Successfully Login";
                response.data = CtrlRes;
                return res.json(response);
            }
        })
    },

    updateUser: function(req, res) {
        var reqBody = req.body;
        apiController.updateUser(reqBody, function(CtrlRes, err) {
            if (err) {
                errorResponse.message = err;
                return res.json(errorResponse);
            } else {
                response.message = "Successfully Login";
                response.data = CtrlRes;
                return res.json(response);
            }
        })
    }

}


module.exports = AUTH;


