'use strict';

const path = require('path');
const admin = require('firebase-admin');

let instance;

exports.initialize = (config) => {
    let credential;
    const conf = {
        databaseURL: config.databaseURL
    };

    if (config.credentialPath) {
        const dir = path.join(__dirname, '../../../..', config.credentialPath);
        credential = require(dir);
        conf.credential = admin.credential.cert(credential);
    }

    instance = admin.initializeApp(conf);
};

exports.getInstance = () => {
    if (!instance) exports.getInstance.initialize();
    return instance;
};
