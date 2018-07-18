var apiController = require('../controllers/api-controller')

var response = {
    statusCode: 200,
    message: null,
    data: []
}


var AUTH = {

    userRegister: function (req, res) {
        var reqBody = req.body;
        apiController.userRegistration(reqBody, function (CtrlRes, err) {
            if (err) {
                response.message = err;
                return res.json(response);
            } else {
                response.message = "Successfully Registered";
                response.data = CtrlRes;
                return res.json(response);
            }
        })
    },

    userLogin: function (req, res) {
        var reqBody = req.body;
        apiController.loginUser(reqBody, function (CtrlRes, err) {
            if (err) {
                response.message = err;
                return res.json(response);
            } else {
                response.message = "Successfully Login";
                response.data = CtrlRes;
                return res.json(response);
            }
        })
    },

    getAllUsers: function (req, res) {
        apiController.getAllUsers(req, function (CtrlRes, err) {
            return res.json(CtrlRes);
        })
    },

    updateUser: function (req, res) {
        var reqBody = req.body;
        apiController.updateUser(reqBody, function (CtrlRes, err) {
            return res.json(CtrlRes);
        })
    }

}


module.exports = AUTH;


