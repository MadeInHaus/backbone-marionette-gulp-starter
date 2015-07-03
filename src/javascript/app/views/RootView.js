var Marionette = require('backbone.marionette');
var constants = require('utils/constants');
var attachFastClick = require('fastclick');

module.exports = Marionette.LayoutView.extend({

    el: 'body',

    regions: {
        regionMain: '#region-main'
    },

    ui: {
        links: '[data-navigate]'
    },

    events: {
        'click @ui.links': 'onClickNavigate'
    },

    initialize: function() {
        this.setListeners();
        this.$el.removeClass(constants.INITING_CLASS);
    },

    setListeners: function() {

        // No click delay for iOS
        attachFastClick(document.body);

        // Force touch devices to respect :active styles in CSS
        document.addEventListener('touchstart', function() {}, true);

    },

    onClickNavigate: function(e) {
        e.preventDefault();
        var url = $(e.currentTarget).data('navigate') || $(e.currentTarget).attr('href');
        this.onNavigate(url);
    },

    onNavigate: function(url) {
        app.trigger('navigate', {
            url: url,
            trigger: true
        });
    }

});
