'use strict';

var _ = require('lodash');
var methods = require('http').METHODS;

module.exports = {

    uppercase: methods,

    lowercase: methods.map((m) => m.toLowerCase()),

    exclude: function(ex) {

        if(!_.isArray(ex)) {
            throw new Error(`Exclusion list must be Array. Received ${ex}`);
        }

        // Want to match case of exclusion array
        //
        var ccase = 'lowercase';

        // Might get an empty array
        //
        if(ex[0]) {
            ccase = /^[A-Z]+$/.test(ex[0]) ? 'uppercase' : ccase;
        }

        return this[ccase].filter((m) => {
            return !~ex.indexOf(m);
        });
    }
};