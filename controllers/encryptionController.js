const AppEncryptor = require('../libs/encryptor');

exports.encrypt = async (req, res) => {
    let appEncryptor = new AppEncryptor();
    appEncryptor.encrypt(req.params.input);
    res.status(200).send(appEncryptor.encryptionResultConcat);
}
exports.decrypt = async (req, res) => {
    let appEncryptor = new AppEncryptor;
    try {
        res.status(200).send(appEncryptor.decrypt(req.params.input));
    } catch (error) {
        res.status(404).json({
            error: "Bad Request",
            message: error.message
        });
    }
}