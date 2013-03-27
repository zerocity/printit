"use strict";

var path = require('path'),
    load = require('express-load');



function createShip(Ship, dd, cb) {
    if (!dd.slug) {
        throw 'createShip was called without a slug in the defaultdata object';
    }

    Ship.findOne({slug: dd.slug}, function (err, s) {
        s = s || new Ship();

        s.size = dd.size || 1;
        s.crew = dd.crew || 1;
        s.cost = dd.cost || 10;
        
        s.save(function (err, sh) {
            console.log('ship saved ' + sh.slug + ' err = ' + err);
        });
    });
}


module.exports = {
    do: function(app, cb) {

        if (typeof cb === 'function') {
            cb();
        }
    }
}
