m-cms
=====

m-cms is a microcms. dry kiss is the principle to follow.
--

mcms renders pages using [swig](http://paularmstrong.github.com/swig/), markdown and [stylus](http://learnboost.github.com/stylus/).

the page content gets loaded using jugglingdb, allowing various database backends.


features:
--
page rendering based on templatefiles and databasecontent (if file doesnt exist, load default template, if datbase object doesnt exist - 404)

loading controllers and routes using express-load

contact page sending mail using nodemailer and gmail (or any other server nodemailer can talk to)

templates can overwrite page title, content and opengraphdata and add javascript as well as css files.

various hooks in layout.html allow very free extension of content (basically adding blocks above and below most "mandatory" blocks.)

no js on the client side (and there will never be any in the default package!)

html5 and css3 is valid. there are no rendering engine dependant prefixes nor will there ever be.

jslinted (run make jslint to relint)

testing (mocha) implemented, `make test` to retest. currently tests the mail function, configuration and existance of necessary templates. will include more soon



coming sometime soon:

plugins (blog, search and so on will be plugins)

page content editable using markdown without touching the html files 

(will also create a ./content folder and thereby further separate content and html)

i18n support.


install:
    first get nodejs: [nodejs](http://nodejs.org)
    
    git clone https://github.com/manarius/m-cms.git
    
    cd m-cms && npm install
    
    npm start
    
enjoy :)


MIT License

Copyright (c) 2012 - 2014 Jascha Ehrenreich <jascha@jaeh.at>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
