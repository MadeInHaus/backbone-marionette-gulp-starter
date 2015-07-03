var app = require('app/app');
var Marionette = require('backbone.marionette');

// Views
var BaseView = require('views/BaseView');
var IndexView = require('views/IndexView');

module.exports = Marionette.Controller.extend({

    initialize: function () {
        app.state.set('onload', true);
        this.bootstrap();
    },

    bootstrap: function () {
        this.baseView = new BaseView();
    },

    index: function () {
        var indexView = new IndexView();
        app.rootView.regionMain.show(indexView);
    },

    defaultHandler: function (route) {
        console.log('%cRoute /%s does not exist', 'color:white; background:gray; padding: 0 0.25em', route);
    }

});
