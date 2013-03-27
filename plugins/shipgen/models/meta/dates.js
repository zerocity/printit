"use strict";

module.exports = function(app) {
    var levels = app.plugins.shipgen.config[app.get('env')].levels,
    // define models
        Dates = app.schema.define('Dates', {
            date:      { type: Date,    default: Date.now(), index: true },
            updated:   { type: Date,    default: Date.now(), index: true },
            published: { type: Boolean, default: false, index: true },
            version:   { type: Number, default: '0' }
        });

    return Dates;
}
