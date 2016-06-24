"use strict";

const FindComicsServices = require('../services/find-comics-service');
const FindComicsDAO = require('../dao/find-comics-dao');


module.exports = class FindComicsController {
  static getAllBonelli(req, res) {
      console.log("2");
      FindComicsServices
        .getAllBonelli()
        .then((comics) => {
          //console.log("Ok");
          var numberOfComics=Object.keys(comics.items).length;;
          var cont=0;
          comics.items.forEach(function(comic) {
            //console.log(comic);
            cont++;
            FindComicsDAO.addComic(comic);
            if(cont==numberOfComics) {
              res.status(200).json({
                title: 'Operazione Riuscita',
                message: "E' stata controllata la pagina 'In Edicola' ed è stato aggiornato il DB delle uscite.",
                json: comics
            });
            }
          });
        })
        .catch(error => res.status(400).json(error));
  }

}
