
var a = require('./a.js');
var b = require('./b.js');


var $ = require('jquery');

$('.load_link').on('click', function() {
    
    require.ensure(['./extra'], function(require) {
        require('./extra');

    }, 'extra');
});

console.log('This is app.js...');
