var Marionette = require('backbone.marionette');

module.exports = app.Behaviors.Closeable = Marionette.Behavior.extend({

    events: {
        'click .js-close': 'destroyView'
    },

    onShow: function() {
        $(window).on('keydown.closeable', _.bind(this.checkClose, this));
    },

    onDestroy: function() {
        $(window).off('.closeable');
    },

    checkClose: function(e) {
        if (e.keyCode === 27) {
            this.destroyView();
        }
    },

    destroyView: function() {
        this.view.destroy();
    }

});
