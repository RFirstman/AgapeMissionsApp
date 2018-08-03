const { decrypt } = require("./encryption");

module.exports = (encryptedText, compareText) => {
    const decryptedText = decrypt(encryptedText);

    return decryptedText === compareText;
}