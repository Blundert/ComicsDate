"use strict";

var Xray = require('x-ray');
const Promise = require('bluebird');

module.exports = class FindComicsService {
  static getAllBonelli(req, res) {
    return new Promise((resolve, reject) => {

      downloadComics('http://www.sergiobonelli.it/sezioni/43/in-edicola')
        .then((value) => {
          var edicola=value;
          downloadComics('http://www.sergiobonelli.it/sezioni/44/prossimamente')
          .then((value) => {
            var numberOfComics=Object.keys(value.items).length;;
            var cont=0;
            value.items.forEach((item) => {
              edicola.items.push(item);
              console.log(edicola);
              cont++;
              if(cont==numberOfComics) {
                resolve(edicola);
              }
            })

          })
          .catch((err) => {reject(err)});
        })
        .catch((err) => {reject(err)});
      });
  }
}


function downloadComics(link) {
  return new Promise((resolve, reject) => {

      var x = Xray();
      x(link, '.cont_visualizzazione',
        {
          items: x('.box', [{
            date: x('.tag_2', '.valore'),
            number: x('.tag_1', '.valore'),
            periodicity: x('.tag_3', '.valore'),
            image: x('.cont_foto', 'img@src'),
            link: x('.cont_foto', 'a@href'),
            description: 'title'
          }])
        }
       )(function(err, obj) {

          if(err) {
            reject(err);
          }
          else {
            var numberOfComics=Object.keys(obj.items).length;;
            var cont=0;
            //console.log(numberOfComics);
            obj.items.forEach(function(elem, index) {
              var xInternal = Xray();
              xInternal(elem.link, '.overbox_maim',
                {
                  comic_name: '.nome_collana',
                  name: x('.articolo_espanso_3d', '.titolo_articolo')
                }
              )(function(err, description) {
                  if(description) {
                    elem.description=description;
                    cont++;
                    //console.log(cont);
                    //console.log(elem);
                    if(cont==numberOfComics) {
                      resolve(obj);
                    }
                  }
              });
            });
          }
      });

    });
}
