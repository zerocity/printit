"use strict";

module.exports = function(app) {
    var config = app.plugins.shipgen.config[app.get('env')],
        levels = config.levels,
        numberOfClasses = config.numberOfClasses,

        // define models
        Ship = app.schema.define('Ship', {

            size: { type: Number, default: 1, min: levels.min, max: levels.max },
            crew: { type: Number, default: 1, min: levels.min, max: levels.max },
            cost: { type: Number, default: 1, min: levels.min }
        });

    return Ship;
}
