var app = angular.module('rcn', []);

app.controller("ProductController", function() {
  this.products = [
        {"name": "Aversana",                "image": "images/products/aversana.jpg"},
        {"name": "Bocconcini",              "image": "images/products/bocconcini.jpg"},
        {"name": "Burrata",                 "image": "images/products/burrata.jpg"},
        {"name": "Fior di latte",           "image": "images/products/fiordilatte.jpg"},
        {"name": "Provola affumicata",      "image": "images/products/provola.jpg"},
        {"name": "Ricotta di bufala",       "image": "images/products/ricotta_bufala.jpg"},
        {"name": "Ricotta di mucca",        "image": "images/products/ricotta_mucca.jpg"},
        {"name": "Treccia",                 "image": "images/products/treccia.jpg"},
        {"name": "Scamorza bianca",         "image": "images/products/scamorza_bianca.jpg"},
        {"name": "Scamorza affumicata",     "image": "images/products/scamorza_affumicata.jpg"},
        {"name": "Primo sale",              "image": "images/products/primo_sale.jpg"},
        {"name": "Cannolo",                 "image": "images/products/cannolo.jpg"},
        {"name": "Capricciosa",             "image": "images/products/capricciosa.jpg"},
        {"name": "Ciambella",               "image": "images/products/ciambella.jpg"},
        {"name": "Filone",                  "image": "images/products/filone.jpg"},
        {"name": "Rolle",                   "image": "images/products/rolle.jpg"},
        {"name": "Saccottino",              "image": "images/products/saccottino.jpg"},
        {"name": "Saccottino con laccetto", "image": "images/products/saccottino_con_laccetto.jpg"},
        {"name": "Treccione",               "image": "images/products/treccione.jpg"},
        {"name": "Acellica",                "image": "images/products/acellica.jpg"},
        {"name": "Caciocavallo",            "image": "images/products/caciocavallo.jpg"},
        {"name": "Caciocavallo al tartufo", "image": "images/products/caciocavallo_al_tartufo.jpg"},
        {"name": "Caciotta farcita",        "image": "images/products/caciotta_farcita.jpg"},
        {"name": "Caciotta semplice",       "image": "images/products/caciotta_semplice.jpg"},
        {"name": "Formaggio affumicato",    "image": "images/products/formaggio_affumicato.jpg"},
        {"name": "Formaggio al tartufo",    "image": "images/products/formaggio_al_tartufo.jpg"},
        {"name": "Marmellata",              "image": "images/products/marmellata.jpg"}
      ];
});
