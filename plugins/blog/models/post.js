"use strict";

module.exports = function(app) {
    
    // define models
    var Post = app.schema.define('Post', {
        title:     { type: String, length: 255 },
        slug:      { type: String, length: 255, index: true },
        content:   { type: app.Schema.Text },
        author:    { type: String, length: 25 },
        date:      { type: Date,    default: Date.now, index: true },
        updated:   { type: Date,    default: Date.now, index: true },
        published: { type: Boolean, default: false, index: true }
    });
    
    return Post;
}
