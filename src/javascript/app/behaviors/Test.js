    var app = require('../app'),
var app = require('app/app'),
        channels = require('../channels'),
    $ = require('jquery'),
    constants = require('utils/constants'),
    Marionette = require('backbone.marionette');

module.exports = app.Behaviors['Test'] = Marionette.Behavior.extend({

    ui: {},

    initialize: function () {
        console.log('View using Test Behavior');
    }

});