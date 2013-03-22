"use strict";

module.exports = function(app) {
    var config = app.plugins.shipgenerator.config[app.get('env')],
        levels = config.levels,
        numberOfClasses = config.numberOfClasses,

        weaponSlot = app.schema.define('weaponSlot', {
            name:       { type: String, length: 255 },
            slug:       { type: String, length: 255, index: true },
            desc:       { type: app.Schema.Text },
            author:     { type: String, length: 25 },
            date:       { type: Date,    default: Date.now(), index: true },
            updated:    { type: Date,    default: Date.now(), index: true },
            published:  { type: Boolean, default: false, index: true },

            class:      { type: app.Schema.ObjectID, default: null  },

            type:       { type: app.Schema.ObjectID, default: null  },

            defense:    { type: app.Schema.ObjectID, default: null },

            size:       { type: Number, default: levels.min, min: levels.min, max: levels.max },

            cost:       { type: Number, default: levels.min, min: levels.min }
        });

    return weaponSlot;
}
