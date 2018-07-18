'use strict';
var mongoose = require('mongoose');

var usersModel = function () {
    var userSchema = mongoose.Schema({
        userId: { type: String },//uniqueId
        name: { type: String },
        surname: { type: String },
        gotram: { type: String },
        father_name: { type: String },
        husband_name: { type: String },
        occupation: { type: String },
        mobile_number: { type: Number },
        password: { type: String },
        Admin_Reject_Message: { type: String },
        status: { type: Boolean },
        view_range: { type: String },
        device_key: { type: String },
        address:
        {
            hno: { type: String },
            street: { type: String },
            town_id: { type: String },
            dist_id: { type: String },
            state_id: { type: String },
            pincode: { type: Number },
            latitude: { type: String },
            longitude: { type: String },
        },
        profile:
        {
            profilePic: { type: String },
            gender: { type: String },
            userRole: { type: String },
            date_of_birth: { type: String },
            date_of_marriage: { type: String },
            status: { type: Boolean },
            qualification: { type: String },
            hobbies: [
                {
                    hobby: { type: String }
                }
            ],
            height: { type: Number },
            wife_name: { type: String },
            husband_name: { type: String },
            uncle_gotram: { type: String },
            childrens: [
                {
                    child_name: { type: String },
                    qualification: { type: String },
                    age: { type: String },
                    marital_Status: { type: String },
                    gender: { type: String }
                }
            ]
        }

    });
    return mongoose.model('users', userSchema, 'users');
}

module.exports = new usersModel();

