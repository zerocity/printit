"use strict";
/**
 *	Route to controllers.
 */

module.exports = function (app) {
    var shipgendir = '/' + app.plugins.shipgen.config[app.get('env')].rootUrl;

    //~ app.get(blogdir + '/categories', app.plugins.blog.controllers.gets.categories);

    //~ app.get(blogdir + '/categories/:category', app.plugins.blog.controllers.gets.categories);

    //~ app.get(blogdir + '/categories/:category/:paginationIndex', app.plugins.blog.controllers.gets.categories);

    app.get(shipgendir + '/:ship', app.plugins.shipgen.controllers.gets.ship);

    app.get(shipgendir + '/:paginationIndex', app.plugins.shipgen.controllers.gets.shipList);

    app.get(shipgendir, app.plugins.shipgen.controllers.gets.shipList);
};
