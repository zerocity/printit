"use strict";

var fs = require('fs'),
    path = require('path'),
    load = require('express-load');

function callCallback(cb, isLast) {
    if (isLast && typeof cb === 'function') {
        console.log('calling cb');
        cb();
    }
}


module.exports = {
    do: function (app, cb) {
        var pluginRoot = path.join(app.rootDir, 'plugins');

        app.set('pluginRoot', pluginRoot);

        fs.readdir(pluginRoot, function (err, dirs) {
            var i = 0,
                directories = [];
            
            for (i = 0; i < dirs.length; i = i + 1) {
                if (dirs[i].indexOf('.js') < 0 
                && dirs[i].indexOf('.html') < 0 
                && dirs[i].indexOf('.css') < 0 
                && dirs[i].indexOf('.styl') < 0 ) {
                    
                    directories.push(dirs[i]);
                }
            }
            
            app.set('pluginDirs', directories);            

            if (typeof cb === 'function') {
                cb();
            }
        });
        
    },

    load: function (app, cb) {
        var pluginDirs = app.get('pluginDirs'),
            pluginIdx = '',
            p,
            i;

        for (i = 0; i < pluginDirs.length; i = i + 1) {
            p = path.join('plugins', pluginDirs[i]);

            if (fs.existsSync(p)) {
                load(path.join(p, 'config')/*, {verbose: true}*/)
                    .then(path.join(p, 'models'))
                    .then(path.join(p, 'controllers'))
                    .then(path.join(p, 'routes'))
                    .into(app);
            }
            
        }
    }
};
