var app = angular.module('rcn', []);

app.controller("ProductController", function() {
  this.products = [
        {"name": "Aversana",                "image": "images/products/aversana.jpg",
         "description": "Latte di bufala, sale e caglio."},
        {"name": "Bocconcini",              "image": "images/products/bocconcini.jpg",
         "description": "Latte di bufala, sale e caglio"},
        {"name": "Burrata",                 "image": "images/products/burrata.jpg",
         "description": "Sacco di pasta filata morbida ripieno di stracciatella (miscuglio di panna fresca e mozzarella sfilacciata a mano in fili sottili). Il suo sapore è dolce e burroso."},
        {"name": "Fior di latte",           "image": "images/products/fiordilatte.jpg",
         "description": "Latte di bufala, sale e caglio"},
        {"name": "Provola affumicata",      "image": "images/products/provola.jpg",
         "description": "Latte di bufala, sale e caglio"},
        {"name": "Ricotta di bufala",       "image": "images/products/ricotta_bufala.jpg",
         "description": "Siero di latte bufalino, sale e caglio"},
        {"name": "Ricotta di mucca",        "image": "images/products/ricotta_mucca.jpg",
         "description": "La ricotta viene realizzata facendo ricuocere, ad una temperatura di circa 90 °C e fino a coagulazione, il siero di latte, ossia la parte liquida del latte che residua dalla lavorazione degli altri formaggi. La nostra ricotta, prodotta con siero di latte vaccino, è particolarmente prelibata e digeribile e può essere consumata nelle diete povere di grassi."},
        {"name": "Treccia",                 "image": "images/products/treccia.jpg",
         "description": "Latte di bufala, sale e caglio"},
        {"name": "Scamorza bianca",         "image": "images/products/scamorza_bianca.jpg",
         "description": "Latte di bufala, sale e caglio"},
        {"name": "Scamorza affumicata",     "image": "images/products/scamorza_affumicata.jpg",
         "description": "Latte di bufala, sale e caglio"},
        {"name": "Primo sale",              "image": "images/products/primo_sale.jpg",
         "description": "Formaggio fresco dal sapore molto delicato. Viene così chiamato perché sottoposto a una sola salatura. Si può gustare al naturale o con farcitura di rucola e peperoncino piccante."},
        {"name": "Cannolo",                 "image": "images/products/cannolo.jpg",
         "description": "Formaggio a pasta filata ripieno di ricotta e noci o ricotta."},
        {"name": "Capricciosa",             "image": "images/products/capricciosa.jpg",
         "description": "Formaggio fresco guarnito con rucola, carota, noci, olive e limone."},
        {"name": "Ciambella",               "image": "images/products/ciambella.jpg",
         "description": "Formaggio a pasta filata, bianco o affumicato, con ripieno di speck e rucola oppure di prosciutto cotto e olive."},
        {"name": "Filone",                  "image": "images/products/filone.jpg",
         "description": "Latte di bufala e sale."},
        {"name": "Rollé",                   "image": "images/products/rolle.jpg",
         "description": "Formaccio a apsta filata, bianco o affumicato, con ripieno di speck e rucola, prosciutto cotto e olive, prosciutto crudo e rucola."},
        {"name": "Saccottino",              "image": "images/products/saccottino.jpg",
         "description": "Formaggio a pasta filata farcito con prosciutto crudo, prosciutto cotto, salame, rucola, burro, olive e speck."},
        {"name": "Saccottino con laccetto", "image": "images/products/saccottino_con_laccetto.jpg",
         "description": "Formaggio a pasta filata ripieno di ricotta e noci o ricotta."},
        {"name": "Treccione",               "image": "images/products/treccione.jpg",
         "description": "Formaggio a pasta filata, bianco o affumicato, con ripieno di speck e rucola, prosciutto cotto e olive o prosciutto crudo e rucola."},
        {"name": "Acellica",                "image": "images/products/acellica.jpg",
         "description": "Formaggio morbido, dal sapore delicato, leggero e invitante, rivolto a chi vuole dare un tocco di fresca novità alla propria tavola con piatti allegri e gustosi."},
        {"name": "Caciocavallo",            "image": "images/products/caciocavallo.jpg",
         "description": "Formaggio dalla pasta filata semi-dura, di forma tondeggiante, con una testa che sovrasta una strozzatura determinata dal legaccio utilizzato per appenderli in coppia durante la stagionatura. Il suo nome deriverebbe appunto dal modo in cui vengono appesi, a cavallo del loro sostegno. Il sapore è aromatico, piacevole, normalmente delicato e quasi dolce quando il formaggio è giocano, fino a divenire piccante a maturazione avanzata."},
        {"name": "Caciocavallo al tartufo", "image": "images/products/caciocavallo_al_tartufo.jpg",
         "description": "Caciocavallo dal gusto particolarmente forte ed intenso grazie al tartufo nero di Acerno aggiunto a pezzetti nel corso della lavorazione."},
        {"name": "Caciotta farcita",        "image": "images/products/caciotta_farcita.jpg",
         "description": "Latte di bufala, sale, peperoncino, rucola e olive."},
        {"name": "Caciotta semplice",       "image": "images/products/caciotta_semplice.jpg",
         "description": "Latte di bufala e sale."},
        {"name": "Formaggio affumicato",    "image": "images/products/formaggio_affumicato.jpg",
         "description": "Latte di bufala e sale."},
        {"name": "Formaggio al tartufo",    "image": "images/products/formaggio_al_tartufo.jpg",
         "description": "Formaggio semistagionato, dalla forma cilindrica; la crosta è rugosa, la pasta compatta di colore bianco crema, dal sapore forte ed intenso grazie al tartufo nero di Acerno aggiunto a pezzetti nel corso della lavorazione."},
        {"name": "Marmellata",              "image": "images/products/marmellata.jpg",
         "description": ""}
      ];

    this.currentProduct = this.products[0];

    this.setCurrent = function (index) {
      this.currentProduct = this.products[index];
    };
});
