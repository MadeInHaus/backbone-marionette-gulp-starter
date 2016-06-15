import Marionette from 'backbone.marionette';
import _ from 'lodash';
import $ from 'jquery';

export default Marionette.Behavior.extend({

    events: {
        'click .js-close': 'destroyView',
    },

    onRender() {
        $(window).on('keydown.closeable', _.bind(this.checkClose, this));
    },

    onDestroy() {
        $(window).off('.closeable');
    },

    checkClose(e) {
        if (e.keyCode === 27) {
            this.destroyView();
        }
    },

    destroyView() {
        this.view.destroy();
    },

});
