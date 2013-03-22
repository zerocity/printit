"use strict";
/**
 *	Route to controllers.
 */

module.exports = function (app) {
    var docdir = '/' + app.plugins.doc.config[app.get('env')].rootUrl;
    
    app.get(docdir + '/:docSlug', app.plugins.doc.controllers.gets.doc);
    app.get(docdir, app.plugins.doc.controllers.gets.docdir);
};
