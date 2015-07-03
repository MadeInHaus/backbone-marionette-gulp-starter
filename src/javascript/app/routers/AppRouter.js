var Marionette = require('backbone.marionette');
var AppController = require('controllers/AppController');

module.exports = Marionette.AppRouter.extend({

    appRoutes: {
        '(/)': 'index',
        '*default': 'defaultHandler'
    },

    controller: new AppController()

});
