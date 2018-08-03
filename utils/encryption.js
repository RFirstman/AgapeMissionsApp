const crypto = require("crypto");

const { decrypt_password } = require("../config");

const algorithm = "aes-256-ctr";

function decrypt(text) {
    var decipher = crypto.createDecipher(algorithm, decrypt_password);
    var dec = decipher.update(text, 'hex', 'utf8')
    dec += decipher.final('utf8');
    return dec;
}

function encrypt(text) {
    var cipher = crypto.createCipher(algorithm, decrypt_password)
    var crypted = cipher.update(text, 'utf8', 'hex')
    crypted += cipher.final('hex');
    return crypted;
}

module.exports = { decrypt };