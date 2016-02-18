'use strict';

var _ = require('lodash');
var lib = require('../../lib');

module.exports = function(test, Promise) {

    return Promise

    .resolve(lib.uppercase)
    .catch((err) => {

        test.fail(`Unable to fetch #uppercase: ${err}`);
    })
    .then((upp) => {

        test.ok(~upp.indexOf('GET'), `Correctly uppercasing methods`);

        return Promise.resolve(lib.lowercase);
    })
    .catch((err) => {

        test.fail(`Unable to fetch #lowercase: ${err}`);
    })
    .then((low) => {

        test.ok(~low.indexOf('get'), `Correctly lowercasing methods`);

        return Promise.resolve(lib.exclude(['get','post']));
    })
    .catch((err) => {

        test.fail(`Unable to execute #exclude(lowercase): ${err}`);
    })
    .then((ex) => {

        test.ok(_.isArray(ex) && ex.length, `Correctly receiving an Array from #exclude(lowercase)`);

        test.ok(!~ex.indexOf('get') && !~ex.indexOf('post'), `Correctly #exclude lowercase methods`)

        return Promise.resolve(lib.exclude(['GET','POST']));
    })
    .catch((err) => {

        test.fail(`Unable to execute #exclude(UPPERCASE): ${err}`);
    })
    .then((ex) => {

        test.ok(_.isArray(ex) && ex.length, `Correctly receiving an Array from #exclude(UPPERCASE)`);

        test.ok(!~ex.indexOf('GET') && !~ex.indexOf('POST'), `Correctly #exclude uppercase methods`)
    })
    .catch((err) => {

        test.fail(`General error: ${err}`);
    })
};
