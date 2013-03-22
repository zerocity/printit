"use strict";
/**
 *	Route to controllers.
 */

module.exports = function (app) {
    var blogdir = '/' + app.plugins.blog.config[app.get('env')].rootUrl;

    //~ app.get(blogdir + '/categories', app.plugins.blog.controllers.gets.categories);

    //~ app.get(blogdir + '/categories/:category', app.plugins.blog.controllers.gets.categories);

    //~ app.get(blogdir + '/categories/:category/:paginationIndex', app.plugins.blog.controllers.gets.categories);

    app.get(blogdir + '/:post', app.plugins.blog.controllers.gets.post);

    app.get(blogdir + '/:paginationIndex', app.plugins.blog.controllers.gets.postList);

    app.get(blogdir, app.plugins.blog.controllers.gets.postList);
};
