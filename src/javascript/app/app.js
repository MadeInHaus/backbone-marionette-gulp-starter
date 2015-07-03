var $ = global.$ = global.jQuery = require('jquery');
var Backbone = require('backbone');
var _ = global._ = require('underscore');
Backbone.$ = $;
var Marionette = require('backbone.marionette');

app = new Marionette.Application();

app.addRegions({
    regionMain: '#region-main'
});

app.Behaviors = app.Behaviors || {};

Marionette.Behaviors.behaviorsLookup = function() {
    return app.Behaviors;
};

app.addInitializer(function() {

    Backbone.history.start({
        pushState: true,
        root: '/'
    });

});

module.exports = app;
