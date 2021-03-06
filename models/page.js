"use strict";

module.exports = function(app) {
    
    // define models
    var Page = app.schema.define('Page', {
        title:     { type: String, length: 255 },
        slug:      { type: String, length: 255 },
        content:   { type: app.Schema.Text },
        footer:    { type: String, length: 255 },
        author:    { type: String, length: 25 },
        date:      { type: Date,    default: Date.now },
        updated:   { type: Date,    default: Date.now },
        published: { type: Boolean, default: false, index: true },
        meta:      { type: Object }
    });
    
    return Page;
}
