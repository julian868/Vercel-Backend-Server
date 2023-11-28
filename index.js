const express = require('express');
const AppEncryptor = require('./Utils/encryptor');

let app = express();

app.get('/:input', (req, res) => {
    appEncryptor = new AppEncryptor();
    appEncryptor.encrypt(req.params.input);
    res.send(appEncryptor.encryptionResult);
})

app.listen(3000, () => {
    console.log('Server Started');
})