"use strict";

module.exports = function(app) {
    var levels = app.plugins.shipgen.config[app.get('env')].levels,
        // define models
        Engine = app.schema.define('Engine', {
            published: { type: Boolean, default: false, index: true },

            classID: {type: app.Schema.ObjectID, default: null },
                
            typeID: { type: app.Schema.ObjectID, default: null },

            size: { type: Number, default: levels.min, min: levels.min, max: levels.max },
            crewSpace: { type: Number, default: levels.min, min: levels.min, max: levels.max },
            
            speed: { type: Number, default: levels.min, min: levels.min, max: levels.max },
            acceleration: { type: Number, default: levels.min, min: levels.min, max: levels.max },
            consumption: { type: Number, default: levels.min, min: levels.min, max: levels.max },
            
            cost: { type: Number, default: levels.min, min: levels.min }
        });
    
    return Engine;
}
