"use strict";

module.exports = function(app) {
    var levels = app.plugins.shipgenerator.config[app.get('env')].levels,
        // define models
        Weapon = app.schema.define('Weapon', {

            name:     { type: String, length: 255 },
            slug:      { type: String, length: 255, index: true },
            desc:   { type: app.Schema.Text },
            author:    { type: String, length: 25 },
            date:      { type: Date,    default: Date.now, index: true },
            updated:   { type: Date,    default: Date.now, index: true },
            published: { type: Boolean, default: false, index: true },

            classID: {type: app.Schema.ObjectID, default: null },
                
            typeID: { type: app.Schema.ObjectID, default: null },
                
            sensorID: { type: app.Schema.ObjectID, default: null },

            defenseID: { type: app.Schema.ObjectID, default: null },

            offenseID: { type: app.Schema.ObjectID, default: null },

            engineID: { type: app.Schema.ObjectID, default: null }
        });
    
    return Weapon;
}
