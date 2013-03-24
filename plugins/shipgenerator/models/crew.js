"use strict";

module.exports = function(app) {
    var levels = app.plugins.shipgenerator.config[app.get('env')].levels,
    // define models
        Crew = app.schema.define('Crew', {
            name:      { type: String, length: 255 },
            slug:      { type: String, length: 255, index: true },
            desc:      { type: app.Schema.Text },
            author:    { type: String, length: 25 },
            date:      { type: Date,    default: Date.now(), index: true },
            updated:   { type: Date,    default: Date.now(), index: true },
            published: { type: Boolean, default: false, index: true },

            classID: {type: app.Schema.ObjectID }, // foreignkey sets this to string: (Fighter, Frigate, Cruiser, Battleship) [1]
            
            typeID: { type: app.Schema.ObjectID }, //
            
            sensorID: { type: app.Schema.ObjectID }, // general sensor level, gets added to all sensor attributes

            defenseID: { type: app.Schema.ObjectID },// gets added to all values below

            offenseID: { type: app.Schema.ObjectID },

            engineID: { type: app.Schema.ObjectID },

            cost: { type: Number, default: 1, min: levels.min, max: levels.max} //(cost in resources to build this ship)
        });

    return Crew;
}
