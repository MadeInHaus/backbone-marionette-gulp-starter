var BaseView = require('./BaseView');
var template = require('templates/index.hbs');

module.exports = BaseView.extend({

    className: 'page page-index',

    template: template,

    ui: {},

    events: {},

    initialize: function() {},

    onBeforeRender: function() {},

    onRender: function() {},

    onBeforeShow: function() {},

    onShow: function() {},

    onBeforeDestroy: function() {},

    onDestroy: function() {}

});
