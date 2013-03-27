"use strict";
/*!
 *  mcms - dry kiss
 *
 *  @author Jascha Ehrenreich <jascha@jaeh.at>
 *  @created 28/02/2013 NZST
 */

var express = require('express'),
    fs = require('fs'),
    load = require('express-load'),
    cons = require('consolidate'),
    swig = require('swig'),
    stylus = require('stylus'),
    path = require('path'),
    async = require('async'),
    configure = require(path.join(__dirname, 'lib', 'configure')),
    confKey = '',
    config = {},
    pluginConfig = require(path.join(__dirname, 'plugins', 'pluginConfig')),
    app = module.exports = express();

async.waterfall([
    function (cb) {
        app.rootDir = __dirname;

        app.Schema = require('jugglingdb').Schema;              // init jugglingdb
        app.schema = new app.Schema('mongodb', {port: 27017});


        load('config') //load main app config and db models first
            .then('models')
            .into(app);
        
        cb(null);
    },
    function (cb) {
        configure.do(app, cb);
    },
    function (cb) {
        pluginConfig.do(app, cb); //configures all plugins and executes the setup.do() function of the plugins if set.
    },
    function (cb) {
        load('controllers').into(app); //loads all applevel controllers
        
        pluginConfig.load(app, function() { //loads all controllers and routes for all plugins into app

            load('routes').into(app); //loads all applevel routes

            cb(null);
        });
    },
    function (cb) {
        app.listen(app.get('port'), function () {
            console.log("m-cms express server listening on port %d in %s mode", app.get('port'), app.get('env'));
            cb(null);
        });
    }
]);
