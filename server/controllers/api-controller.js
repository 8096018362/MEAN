
var userModel = require('../models/users_model')
const encrypt = require('../util/encrypt');

var APICONTROLLERS = {

    userRegistration: function (userObj, callback) {
        var newUser = userModel();
        var reqData = userObj;

        newUser.name = reqData.name;
        newUser.surname = reqData.surname;
        newUser.gotram = reqData.gotram;
        newUser.occupation = reqData.occupation;
        newUser.mobile_number = reqData.mobile_number;
        newUser.password = encrypt.encryptPassword(reqData.password);
        newUser.father_name = reqData.father_name;
        newUser.husband_name = reqData.husband_name;
        newUser.status = 'PENDING';
        newUser.profile.userRole = 'user';
        newUser.address.state_id = reqData.state_id;
        newUser.address.dist_id = reqData.dist_id;
        newUser.address.town_id = reqData.town_id;

        // newUser.device_key = reqData.device_key;

        userModel.findOne({ mobile_number: reqData.mobile_number }, function (err, user) {
            if (err) {
                callback(null, 'error in database')
            }
            if (user) {
                callback(null, 'User already Added')
            } else {
                newUser.save(function (err, User) {
                    if (err) {
                        callback(null, 'error in sending obj')
                    } else {
                        callback(User, null)
                    }
                })
            }
        })
    },



    loginUser: (loginObj, callback) => {
        userModel.findOne({ mobile_number: loginObj.mobile_number }, function (err, user) {
            if (err) {
                callback(null, 'error in database')
            } else if (!user) {
                callback(null, 'User not Registed with this mobile Number')
            } else if (!encrypt.comparePwd(loginObj.password, user.password)) {
                callback(null, 'Please enter correct password')
            } else {
                callback(user, null)
            }
        });
    },

    userStatus: function (userObj, callback) {
        userModel.findOne({ mobile_number: userObj.mobile_number }, function (err, user) {
            if (err) {
                callback(null, 'error in database')
            }
            if (user) {
                callback(user, null)
            }
        })
    },
    userVerified: function (userObj, callback) {
        userModel.findOne({ mobile_number: userObj.mobile_number }, function (err, userData) {
            if (err) {
                callback(null, 'error in database')
            } else {
                userData.userId = "VYSYA100OJILP";
                userData.status = "ACTIVE";
                userData.save(function (err, user) {
                    if (err) {
                        callback(null, 'error in sending obj')
                    } else {
                        callback(user, null)
                    }
                })
            }
        })
    },


    getAllUsers: function (res, callback) {
        userModel.find({}, function (err, data) {
            if (err) throw err;
            callback(data, null)
        });
    },

    updateUser: function (userObj, callback) {
        userModel.findOne({ mobile_number: userObj.mobile_number }, function (err, userData) {
            if (err) {
                return 'error'
            } else {
                userData.address.hno = userObj.hno;
                userData.address.street = userObj.street;
                userData.address.pincode = userObj.pincode;
                userData.address.temp.hno = userObj.hno;
                userData.address.temp.street = userObj.street;
                userData.address.temp.pincode = userObj.pincode;
                userData.save(function (err, user) {
                    if (err) {
                        return 'err';
                    } else {
                        var obj = {
                            status: 'success'
                        }
                        callback(obj, null)
                    }
                })
            }
        })
    }
}

module.exports = APICONTROLLERS;

