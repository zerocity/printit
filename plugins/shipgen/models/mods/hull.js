"use strict";

module.exports = function(app) {
    var levels = app.plugins.shipgen.config[app.get('env')].levels,
        // define models
        Hull = app.schema.define('Hull', {

            name:      { type: String, length: 255 },
            slug:      { type: String, length: 255, index: true },
            desc:      { type: app.Schema.Text },
            author:    { type: String, length: 25 },
            date:      { type: Date,    default: Date.now, index: true },
            updated:   { type: Date,    default: Date.now, index: true },
            published: { type: Boolean, default: false, index: true },

            classID: {type: app.Schema.ObjectID, default: null },
            
            typeID: { type: app.Schema.ObjectID, default: null },

            size: { type: Number, default: levels.min, min: levels.min, max: levels.max },
            crewSpace: { type: Number, default: levels.min, min: levels.min, max: levels.max },
            
            armor: { type: Number, default: levels.min, min: levels.min, max: levels.max },
            repair: { type: Number, default: levels.min, min: levels.min, max: levels.max },
            
            cost: { type: Number, default: levels.min, min: levels.min }
        });
    
    return Hull;
}

