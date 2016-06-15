import polyfill from 'babel-polyfill'; // eslint-disable-line no-unused-vars
import Marionette from 'backbone.marionette';
import App from 'app/app';

// Define behaviors
import Closeable from 'behaviors/Closeable';

const app = new App();
window.app = app;
app.Behaviors = app.Behaviors || {};

Marionette.Behaviors.behaviorsLookup = function() {
    return app.Behaviors;
};

app.Behaviors.Closeable = Closeable;

app.start();
