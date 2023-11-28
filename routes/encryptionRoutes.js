const encryptionController = require('../controllers/encryptionController');
const express = require('express');

const encryptionRoutes = express.Router();

encryptionRoutes.route('/encrypt/:input').get(encryptionController.encrypt);
encryptionRoutes.route('/decrypt/:input').get(encryptionController.decrypt);

module.exports = encryptionRoutes;