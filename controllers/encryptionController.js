const AppEncryptor = require('../libs/encryptor');

exports.encrypt = async (req, res) => {
    let appEncryptor = new AppEncryptor();
    appEncryptor.encrypt(req.params.input);
    res.status(200).json(appEncryptor.encryptionResult);
}

exports.decrypt = async (req, res) => {
    let appEncryptor = new AppEncryptor;
    res.status(200).send(appEncryptor.decrypt(req.params.input));
}