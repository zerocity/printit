"use strict";

module.exports = function(app) {
    var levels = app.plugins.shipgen.config[app.get('env')].levels,
    // define models
        Crew = app.schema.define('Crew', {
            name: { type: String, default: '', length: 50},
            slug: { type: String, default: '', length: 50},
            published: { type: Boolean, default: false },
            type: { type: String, default: 'common' },
            
            size: { type: Number, default: 1, min: levels.min, max: levels.max },
            type: { type: String, default: 'common' },
            cost: { type: Number, default: 1, min: levels.min } //(cost in resources to build this ship)
        });

    return Crew;
}
