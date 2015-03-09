var Marionette = require('backbone.marionette'),
    AppController = require('controllers/AppController.js'),
    channels = require('../channels.js');

module.exports = Marionette.AppRouter.extend({

    appRoutes: {
        '(/)': 'index',
        '*default': 'defaultHandler'
    },

    controller: new AppController()

});
