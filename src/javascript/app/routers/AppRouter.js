import Marionette from 'backbone.marionette';

export default Marionette.AppRouter.extend({

    appRoutes: {
        '': 'index',
        'about': 'about',
        '*default': 'defaultHandler',
    },

});
