import Marionette from 'backbone.marionette';
import template from 'templates/app-layout';
import NavView from 'views/NavView';
import FooterView from 'views/FooterView';
import attachFastClick from 'fastclick';
import $ from 'jquery';
import { LOADING_CLASS } from 'utils/constants';

export default Marionette.View.extend({

    className: 'is-loading',

    template,

    regions: {
        footer: '#footer',
        main: '#main',
        navigation: '#navigation',
    },

    ui: {
        links: '[data-navigate]',
    },

    events: {
        'click @ui.links': 'onClickNavigate',
    },

    initialize() {
        // No click delay for iOS
        attachFastClick(document.body);

        // Force touch devices to respect :active styles in CSS
        document.addEventListener('touchstart', function() {}, true);
    },

    onRender() {
        this.showChildView('navigation', new NavView());
        this.showChildView('footer', new FooterView());
    },

    onDomRefresh() {
        this.$el.removeClass(LOADING_CLASS);
    },

    onClickNavigate(e) {
        e.preventDefault();
        const url = $(e.currentTarget).data('navigate') || $(e.currentTarget).attr('href');
        window.app.trigger('navigate', {
            url,
            trigger: true,
        });
    },

});
