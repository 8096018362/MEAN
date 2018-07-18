var bcrypt = require('bcrypt');
const saltRounds = 10;

exports.encryptPassword = function (plainPwd) {
    var salt = bcrypt.genSaltSync(saltRounds);
    var hash = bcrypt.hashSync(plainPwd, salt);
    return hash;
}
exports.comparePwd = function (plainPwd, hash) {
    return bcrypt.compareSync(plainPwd, hash);
}
