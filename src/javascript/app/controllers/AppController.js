var app = require('app/app');
var Backbone = require('backbone');
var channels = require('channels');

// Views
var GlobalView = require('views/GlobalView');
var BaseView = require('views/BaseView');
var IndexView = require('views/IndexView');

module.exports = Backbone.Marionette.Controller.extend({

    initialize: function () {

        // State checks
        app.onload = true;

        // Bootstrap it, gurrl
        this.bootstrap();

    },

    bootstrap: function () {
        this.globalView = new GlobalView();
        this.baseView = new BaseView();

        channels.globalChannel.on('navigate', this.navigate, this);

    },

    navigate: function (options) {

        // If navigate() is being called...
        // we must be past our initial page load
        // so we'll set onload to 'false'
        app.onload = false;

        var url = options.url;
        var trigger = options.trigger ? options.trigger : false;

        app.appRouter.navigate(url, {
            trigger: trigger
        });

    },

    /* View Routes
    =========================================== */

    index: function () {
        var indexView = new IndexView();
        app.regionMain.show(indexView);
    },

    defaultHandler: function (route) {
        console.log('%cRoute /%s does not exist', 'color:white; background:gray; padding: 0 0.25em', route);
    }

});
