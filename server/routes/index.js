"use strict";

const TodoRoutes = require('../api/todo/routes/todo-routes');
const FindComicsRoutes = require('../api/findComics/routes/find-comics-routes');

const StaticDispatcher = require('../commons/static/index');


module.exports = class Routes {
   static init(app, router) {
     TodoRoutes.init(router);
     FindComicsRoutes.init(router)
     router
       .route('*')
       .get(StaticDispatcher.sendIndex);


     app.use('/', router);
   }
}
