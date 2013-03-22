"use strict";

/**
 * handles all get requests. 
*/

var fs = require('fs'),
    path = require('path'),
    form = require('express-form'),
    field = form.field;

exports.index = function (req, res) {
    var templateFile = path.join(req.app.get('views'), req.app.get('theme'), 'pages', req.params.page + '.html'),
        Page = req.app.models.page;

    Page.findOne({where: {published: true, slug: 'home'}, order: 'updated ASC'}, function (err, page) {
        console.log('err = ' + err);

        if (!page) {
            res.redirect('404');
            return;
        }

        fs.exists(templateFile, function (exists) {
            if (!exists) {
                res.render(req.app.get('theme') + '/page.html', page);
            } else {
                res.render(req.app.get('theme') + '/pages/' + req.params.page, page);
            }
        });
    });
};

exports.page = function (req, res) {
    var templateFile = path.join(req.app.get('views'), req.app.get('theme'), 'pages', req.params.page + '.html'),
        Page = req.app.models.page;

    Page.findOne({where: {published: true, slug: req.params.page}, order: 'updated ASC'}, function (err, page) {

        if (!page) {
            res.redirect('404');
            return;
        }

        fs.exists(templateFile, function (exists) {
            if (!exists) { //load default page template
                res.render(req.app.get('theme') + '/page.html', page);
            } else { //load custom page template
                res.render(req.app.get('theme') + '/pages/' + req.params.page, page);
            }
        });
    });
};

exports.fourofour = function (req, res) {
    res.render(req.app.get('theme') + '/pages/fourofour.html', function (err, page) {
        res.send(page, 404);
    });
};

exports.setup = function (req, res) {
    res.render(req.app.get('theme') + '/pages/setup.html');
};

exports.deleteAll = function (req, res) {
    res.render(req.app.get('theme') + '/pages/deleteAll.html');
};
