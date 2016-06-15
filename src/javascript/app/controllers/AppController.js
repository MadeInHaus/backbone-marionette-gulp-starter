import Marionette from 'backbone.marionette';
import IndexView from 'views/IndexView';
import AboutView from 'views/AboutView';
import Error404View from 'views/Error404View';

export default Marionette.Object.extend({

    index() {
        window.app.getView().showChildView('main', new IndexView());
    },

    about() {
        window.app.getView().showChildView('main', new AboutView());
    },

    defaultHandler(route) {
        window.app.getView().showChildView('main', new Error404View({
            route,
        }));
        console.warn(`[ ${route} ] does not exist!`);
    },

});
