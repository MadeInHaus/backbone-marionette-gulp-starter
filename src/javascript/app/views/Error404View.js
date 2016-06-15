import BaseView from './BaseView';
import template from 'templates/error404.hbs';

export default BaseView.extend({

    className: 'page page-error404',
    template,

    initialize(options) {
        this.route = options.route;
    },

    templateContext() {
        return {
            route: this.route,
        };
    },

});
