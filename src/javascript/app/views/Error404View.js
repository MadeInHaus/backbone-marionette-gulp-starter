var Marionette = require('backbone.marionette');
var template = require('templates/error404.hbs');

module.exports = Marionette.ItemView.extend({

    className: 'error404',

    template: template

});
