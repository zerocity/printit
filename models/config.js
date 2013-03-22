"use strict";

module.exports = function(app) {
    
    // define models
    var Config = app.schema.define('Config', {
        name:     { type: String, length: 25 },
        author:   { type: String, length: 25 },
        title:   { type: String, length: 50 },
        branding:   { type: String, length: 50 },
        logo:   { type: String, length: 255 },
        protocoll: { type: String, length: 10},
        url      : { type: String, length: 255},
        email    : { type: String, length: 255}
    });
};
