var $ = global.$ = global.jQuery = require('jquery');
var _ = global._ = require('lodash');
var Backbone = require('backbone');
Backbone.$ = $;
Backbone._ = _;
var Marionette = require('backbone.marionette');

var RootView = require('views/RootView');
var State = require('models/State');

app = new Marionette.Application({

    initialize: function() {
        this.state = new State();
        this.on('navigate', this.navigate, this);
    },

    onStart: function() {

        var AppRouter = require('./routers/AppRouter');
        this.appRouter = new AppRouter();

        this.rootView = new RootView({
            model: this.state
        });

        Backbone.history.start({
            pushState: true,
            root: '/'
        });

    },

    navigate: function(options) {

        this.state.set('onload', false);

        var url = options.url;
        var trigger = options.trigger ? options.trigger : false;

        this.appRouter.navigate(url, {
            trigger: trigger
        });

    }

});

app.Behaviors = app.Behaviors || {};

Marionette.Behaviors.behaviorsLookup = function() {
    return app.Behaviors;
};

module.exports = app;
