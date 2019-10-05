'use strict';

const path = require('path');
const admin = require('firebase-admin');

let instance;

exports.initialize = (config) => {
    let credential;

    if (config.credentialPath) {
        const dir = path.join(__dirname, '../../../..', config.credentialPath);
        credential = require(dir);
    }

    instance = admin.initializeApp({
        databaseURL: config.databaseURL,
        credential: credential ? admin.credential.cert(credential) : undefined
    });
};

exports.getInstance = () => {
    if (!instance) exports.getInstance.initialize();
    return instance;
};
