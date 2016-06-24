
"use strict";

const mongoose = require('mongoose');

const _findComicsSchema = {
    date:String,
    number:String,
    periodicity:String,
    image:String,
    link:String,
    description: {
      comic_name:String,
      name:String
    },
    createdAt: {type: Date, default: Date.now}
}

module.exports = mongoose.Schema(_findComicsSchema);
