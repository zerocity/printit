"use strict";

module.exports = function(app) {
    var levels = app.plugins.shipgen.config[app.get('env')].levels,
        // define models
        Shield = app.schema.define('Shield', {
            published: { type: Boolean, default: false, index: true },

            classID: {type: app.Schema.ObjectID, default: null },
            
            typeID: { type: app.Schema.ObjectID, default: null },

            size: { type: Number, default: levels.min, min: levels.min, max: levels.max },
            crewSpace: { type: Number, default: 0, min: 0, max: levels.max },
            
            shield: { type: Number, default: levels.min, min: levels.min, max: levels.max },
            refill: { type: Number, default: levels.min, min: levels.min, max: levels.max },
            
            cost: { type: Number, default: levels.min, min: levels.min }
        });
    
    return Shield;
}

