"use strict";

module.exports = function(app) {
    var levels = app.plugins.shipgenerator.config[app.get('env')].levels,
        // define models
        Class = app.schema.define('Class', {
            name: { type: String, length: 255 },
            slug: { type: String, length: 255, index: true },
            desc: { type: app.Schema.Text },

            date:      { type: Date,    default: Date.now, index: true },
            updated:   { type: Date,    default: Date.now, index: true },
            published: { type: Boolean, default: false, index: true },
            
            minSize:   { type: Number, default: 1, min: levels.min, max: levels.max },
            maxSize:   { type: Number, default: 1, min: levels.min, max: levels.max },
            
            crewMin:   { type: Number, default: 0, min: levels.min, max: levels.max },
            crewMax:   { type: Number, default: 0, min: levels.min, max: levels.max }
        });

    return Class;
}
