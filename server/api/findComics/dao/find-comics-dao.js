"use strict";

const mongoose = require('mongoose');
const Promise = require('bluebird');
const findComincsSchema = require('../model/find-comics-model');
const _ = require('lodash');

findComincsSchema.statics.addComic = (comic) => {
    if (!_.isObject(comic))
        return reject(new TypeError('It is not a valid object.'));

    let _query = {'description.comic_name': comic.description.comic_name, 'description.name': comic.description.name};

    FindComics
      .find(_query)
      .exec((err, done) => {
          if(!err) {
            let _findComics = new FindComics(comic);
            if(done.length<=0)
            _findComics.save((err, saved) => {
              if(err) console.log(err);
              if(saved) console.log(saved);
            });
          };
      });
}

const FindComics  = mongoose.model('comics', findComincsSchema);

module.exports = FindComics;
