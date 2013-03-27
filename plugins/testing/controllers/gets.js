"use strict";

var path = require('path'),
    fs = require('fs'),
    md = require("node-markdown").Markdown;

exports.docdir = function (req, res) {
    var docRootUrl = req.app.plugins.testing.config[req.app.get('env')].rootUrl,
        docRootDir = path.join(req.app.rootDir, 'plugins', 'testing', 'md');
    
    fs.readdir(docRootDir, function (err, files) {
        var menu = [],
            i = 0,
            file = '';

        for (i=0; i < files.length; i = i + 1) {
            file = files[i].split('.')[0];
            menu.push( { url: '/test/' + file, text: file});
        }

        res.render(req.app.get('theme') + '/' + docRootUrl + '/' + 'doc_static.html', {menu: menu});
    }); 
}

exports.testing = function (req, res) {
    var docRootUrl = req.app.plugins.testing.config[req.app.get('env')].rootUrl;
    
    var docRootDir = path.join(req.app.rootDir, 'plugins', 'testing', 'md');
    
    fs.readdir(docRootDir, function (err, files) {
        var menu = [],
            i = 0,
            file = '';

        for (i=0; i < files.length; i = i + 1) {
            file = files[i].split('.')[0];
            menu.push( { url: '/test/' + file, text: file});
        }
        
        fs.readFile(path.join(docRootDir, '/', req.params.docSlug + '.md'), "utf8", function (err, file) {
            console.log('err = ' + err);
            
            if (!file || err ) {
                res.redirect('404');
            }
            
            var md_html = md(file);

            res.render(req.app.get('theme') + '/' + docRootUrl + '/' + 'doc_static.html', {md: md_html, menu: menu});
        });
    });
}
