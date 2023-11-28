const AppEncryptor = require('./libs/encryptor');
const express = require('express');
const encryptionRouter = require('./routes/encryptionRoutes');
let app = express();

app.use('/encryption/',encryptionRouter);

module.exports = app;