"use strict";

var path = require('path'),
    form = require('express-form'),
    field = form.field,
    mail = require(path.join(__dirname, '..', 'lib', 'mail'));


function createPage(Page, dd) {
    if (!dd.slug) {
        throw 'createPage was called without a slug in the defaultdata object';
    }

    if (!dd.domain) {
        throw 'createPage was called without a domain in the defaultdata object';
    }

    Page.findOne({slug: dd.slug, domain: dd.domain}, function (err, p) {
        p = p || new Page();

        p.domain = dd.domain || '';
        p.slug = dd.slug || '';
        p.title = dd.title || '';
        p.author = dd.author || '';
        p.content = dd.content || '';
        p.footer = dd.footer  || '';
        p.published = true;
        p.date = new Date().getTime();
        p.updated = new Date().getTime();
        console.log('saving p');
        console.log(p);
        p.save(function (err, pa) {
            console.log('page saved ' + pa.slug + ' err = ' + err);
        });
    });
}

function createPost(Post, dd) {
    if (!dd.slug) {
        throw 'createPost was called without a slug in the defaultdata object';
    }

    if (!dd.domain) {
        throw 'createPost was called without a domain in the defaultdata object';
    }

    Post.findOne({slug: dd.slug, domain: dd.domain}, function (err, p) {
        p = p || new Post();
        
        p.domain = dd.domain || '';
        p.slug = dd.slug || '';
        p.title = dd.title || '';
        p.author = dd.author || '';
        p.content = dd.content || '';
        p.published = true;
        p.date = new Date().getTime();
        p.updated = new Date().getTime();

        p.save(function (err, pa) {
            //~ console.log('post saved ' + pa.slug + ' err = ' + err);
        });
    });
}


function createCategory(Category, dd) {
    if (!dd.slug) {
        throw 'createCategory was called without a slug in the defaultdata object';
    }

    if (!dd.domain) {
        throw 'createCategory was called without a domain in the defaultdata object';
    }

    Category.findOne({slug: dd.slug, domain: dd.domain}, function (err, c) {
        c = c || new Category();

        c.domain = dd.domain || '';
        c.slug = dd.slug || '';
        c.title = dd.title || '';
        c.desc = dd.desc || '';
        c.published = true;
        c.date = new Date().getTime();
        c.updated = new Date().getTime();

        c.save(function (err, ca) {
            //~ console.log('category saved ' + ca.slug + ' err = ' + err);
        });
    });
}
// Form filter and validation middleware
exports.contactFormMiddleWare = form(
    field('name').trim().required().isAlphanumeric(),
    field('email').trim().required().isEmail(),
    field('subject').trim().required(),
    field('text').trim().required()
);

exports.contact = function (req, res, next) {
// Express request-handler now receives filtered and validated data
    var errs = [],
        mailSent = false,
        key = '';

    if (!req.form.isValid) {
        // pass errors on to user. this are only form errors, not email errors!
        errs = req.form.errors;
    } else {
        //send mail
        mail.sendMail(req.form, res.locals.config);
        mailSent = true; //XXX this actually says nothing. emails should be logged before sending to make sure they persist.
    }

    res.render(req.app.get('theme') + '/pages/contact', {errs: errs, mailSent: mailSent, name: req.form.name});
};

exports.setup = function (req, res, next) {

    var errs = [],
        defaultdata = require(path.join(req.app.rootDir, 'lib', 'defaultdata.js')),
        i;

    for (i = 0; i < defaultdata.pages.length; i = i + 1) {
        createPage(req.app.models.page, defaultdata.pages[i]);
    }

    for (i = 0; i < defaultdata.posts.length; i = i + 1) {
        createPost(req.app.plugins.blog.models.post, defaultdata.posts[i]);
    }

    for (i = 0; i < defaultdata.categories.length; i = i + 1) {
        createCategory(req.app.plugins.blog.models.category, defaultdata.categories[i]);
    }
    res.render(req.app.get('theme') + '/pages/setup.html', {errs: errs, completed: true});
};


exports.deleteAll = function (req, res) {
    var Page = req.app.models.page,
        Post = req.app.plugins.blog.models.post,
        Category = req.app.plugins.blog.models.category;

    Page.destroyAll(function () {
        console.log('destroyed all pages');
    });
    
    Post.destroyAll(function () {
        console.log('destroyed all posts');
    });
    
    Category.destroyAll(function () {
        console.log('destroyed all categories');
    });
    
    res.render(req.app.get('theme') + '/pages/deleteAll.html', {completed: true});
};
