"use strict";

module.exports = function(app) {
    
    // define models
    var Category = app.schema.define('Category', {
        title:     { type: String, length: 55 },
        slug:      { type: String, length: 55, index: true },
        published: { type: Boolean, default: false, index: true },
        date:      { type: Date, default: new Date().getTime(), index: true },
        updated:   { type: Date, default: new Date().getTime(), index: true }
    });

    return Category;
}
