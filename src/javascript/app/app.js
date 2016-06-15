import _ from 'lodash';
import $ from 'jquery';
import Backbone from 'backbone';
Backbone.$ = $;
Backbone._ = _;
import Marionette from 'backbone.marionette';

import AppRouter from 'routers/AppRouter';
import AppLayout from 'views/AppLayout';
import AppController from 'controllers/AppController';
import AppState from 'models/state';

export default Marionette.Application.extend({

    region: '#app',

    onBeforeStart() {
        this.appRouter = new AppRouter({
            controller: new AppController(),
        });
    },

    onStart() {

        this.showView(new AppLayout({
            model: new AppState(),
        }));

        this.on('navigate', function(options) {
            const url = options.url;
            const trigger = options.trigger ? options.trigger : false;
            this.appRouter.navigate(url, {
                trigger,
            });
        });

        Backbone.history.start({
            pushState: true,
            root: '/',
        });

    },

});
