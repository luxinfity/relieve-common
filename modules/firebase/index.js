'use strict';

const admin = require('firebase-admin');

let instance;

exports.initialize = (config) => {
    let credential;

    if (config.credentialPath) {
        credential = require(config.credentialPath);
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
