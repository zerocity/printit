"use strict";

module.exports = function(app) {
    var levels = app.plugins.shipgen.config[app.get('env')].levels,
    // define models
        Synopsis = app.schema.define('Synopsis', {
            name:      { type: String, length: 255 },
            slug:      { type: String, length: 255, index: true },
            desc:      { type: app.Schema.Text },
            author:    { type: app.Schema.ObjectID, default: null },
            image:     { type: String, length: 255 }
        });
    return Synopsis;
}
