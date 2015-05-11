var app = require('app/app');
var channels = require('channels');
var Marionette = require('backbone.marionette');

module.exports = app.Behaviors.Navigator = Marionette.Behavior.extend({

    ui: {
        links: '[data-navigate], a[href^="/"]'
    },

    events: {
        'click @ui.links': 'onClickNavigate'
    },

    onClickNavigate: function (e) {
        e.preventDefault();
        var url = $(e.currentTarget).data('navigate') || $(e.currentTarget).attr('href');
        this.onNavigate(url);
    },

    onNavigate: function (url) {
        channels.globalChannel.trigger('navigate', {
            url: url,
            trigger: true
        });
    }

});
