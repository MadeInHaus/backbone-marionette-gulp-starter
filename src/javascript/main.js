var app = require('app/app');
var AppRouter = require('app/routers/AppRouter');

app.appRouter = new AppRouter();
app.start();
