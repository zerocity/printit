"use strict";

module.exports = {
    rootUrl: 'shipgen',
    menuItems: [
        {url: '/shipgen/', text: 'shipgen'}
    ],
    levels: {
        max: 10,
        min: 1
    },
    range: {
        min: 1,
        max: 1000
    },
    numberOfClasses: 4,
    pagination : {
        above: {
            show: true
        },
        below: {
            show: true
        },
        prev: {
            show: true,
            text: 'previous posts'
        },
        count: {
            show: true
        },
        next: {
            show: true,
            text: 'next posts'
        },
        perpage: 10
    }
};
