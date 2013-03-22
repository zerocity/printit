"use strict";

var path = require('path'),
    fs = require('fs');

exports.postList = function (req, res) {
    var config = req.app.plugins.blog.config[req.app.get('env')],
        blogRootDir = '/' + config.rootUrl + '/',
        postDir = path.join(req.app.get('views'), req.app.get('theme'), 'blog', 'posts'),
        Post = req.app.plugins.blog.models.post,
        postCount,
        pagination = config.pagination,
        perpage = parseInt(pagination.perpage),
        paginationIndex = parseInt(req.params.paginationIndex || 0),
        nextPageIndex = paginationIndex + 1,
        prevPageIndex = paginationIndex - 1,
        category = req.params.category || false,
        skip = perpage * paginationIndex;

    if (isNaN(paginationIndex)) {
        res.redirect('404');
        return;
    }

    Post.count(function (err, count) {

        if (skip > (count - perpage)) {
            pagination.next.show = false;
        } else {
            pagination.next.show = true;
        }

        if (paginationIndex <= 0) {
            pagination.prev.show = false;
        } else {
            pagination.prev.show = true;
        }

        pagination.prev.url = blogRootDir + prevPageIndex;
        pagination.next.url = blogRootDir + nextPageIndex;

        pagination.pages = pagination.pages || {};
        pagination.pages.current = nextPageIndex;

        pagination.pages.max = Math.ceil(count / perpage);

        var where = {
            published: true
        };

        if (category) {
            where.category = category;
        }

        Post.all({where: where, order: 'updated DESC', limit: perpage, skip: skip}, function (err, posts) {
            if (!posts || posts.length < 1) {
                next();
                return;
            }

            res.render(req.app.get('theme') + '/blog/postList', {blogRootDir: blogRootDir, posts: posts, pagination: pagination});
        });
    });
};


exports.post = function (req, res, next) {
    var postTemplateFile = path.join(req.app.get('theme'), 'blog', 'post.html'),
        Post = req.app.plugins.blog.models.post;

    Post.findOne({where: {published: true, slug: req.params.post}, order: 'updated ASC'}, function (err, post) {

        fs.exists(path.join(req.app.get('views'), postTemplateFile), function (exists) {

            if (!exists) {
                res.redirect('404');
            } else if (!post) {
                next();
            } else {
                res.render(postTemplateFile, {post: post});
            }
        });
    });
}
