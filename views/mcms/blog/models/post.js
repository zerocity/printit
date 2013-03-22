"use strict";

module.exports = function(app) {
    
    var Schema = require('jugglingdb').Schema;
    var schema = new Schema('mongodb', {port: 27017}); //port number depends on your configuration
    // define models
    var Post = schema.define('Post', {
        title:     { type: String, length: 255 },
        slug:      { type: String, length: 255 },
        content:   { type: Schema.Text },
        date:      { type: Date,    default: Date.now },
        published: { type: Boolean, default: false, index: true }
    });
    
    return Post;
}
