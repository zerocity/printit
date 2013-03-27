"use strict";
/**
 *	Route to controllers.
 */

module.exports = function (app) {
    var docdir = '/' + app.plugins.testing.config[app.get('env')].rootUrl;
    
    app.get(docdir + '/:docSlug', app.plugins.testing.controllers.gets.doc);
    app.get(docdir, app.plugins.doc.controllers.gets.docdir);
};
