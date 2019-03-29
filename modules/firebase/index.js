'use strict';

const admin = require('firebase-admin');

let instance;

exports.initialize = (config) => {
    instance = admin.initializeApp({
        ...config,
        credential: admin.credential.cert(config.credential)
    });
};

exports.getInstance = () => {
    if (!instance) exports.getInstance.initialize();
    return instance;
};
