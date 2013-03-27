"use strict";

module.exports = function(app) {
    var levels = app.plugins.shipgen.config[app.get('env')].levels,
    // define models
        Crew = app.schema.define('Crew', {
            size: { type: Number, default: 1, min: levels.min, max: levels.max },
            cost: { type: Number, default: 1, min: levels.min } //(cost in resources to build this ship)
        });

    return Crew;
}
