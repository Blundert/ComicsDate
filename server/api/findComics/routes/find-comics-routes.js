"use strict";

const FindComicsController = require('../controller/find-comics-controller');

module.exports = class TodoRoutes {
    static init(router) {
      console.log("1");
      router
        .route('/api/find-comics-bonelli')
        .get(FindComicsController.getAllBonelli);

    }
}
