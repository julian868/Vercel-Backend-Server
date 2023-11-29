const AppEncryptor = require('../libs/encryptor');

exports.encrypt = async (req, res) => {
    let appEncryptor = new AppEncryptor();
    appEncryptor.encrypt(req.params.input);
    res.status(200).json({
        status: "encryption success",
        cipherText: appEncryptor.encryptionResultConcat
    });
}
exports.decrypt = async (req, res) => {
    let appEncryptor = new AppEncryptor;
    try {
        res.status(200).json({
            status: "decryption success",
            plainText: appEncryptor.decrypt(req.params.input)
        });
    } catch (error) {
        res.status(404).json({
            error: "Bad Request",
            message: error.message
        });
    }
}