const menuProducts = {
  "menu": {
    "catalog": null,
    "name": "Меню"
  },
  "bar": {
    "catalog": "menu",
    "type": "bar",
    "name": "Бар"
  },
  "kitchen": {
    "catalog": "menu",
    "type": "kitchen",
    "name": "Кухня"
  },
  "beer": {
    "catalog": "bar",
    "type": "beer",
    "name": "Пиво"
  },
  "leaf": {
    "catalog": "beer",
    "localisation": "Бар",
    "type": "product",
    "name": "Leaf",
    "price": 180,
    "isAvailable": true
  },
  "hoegaarden": {
    "catalog": "beer",
    "localisation": "Бар",
    "type": "product",
    "name": "Hoegaarden",
    "price": 200,
    "isAvailable": true
  },
  "heineken": {
    "catalog": "beer",
    "localisation": "Бар",
    "type": "product",
    "name": "Heineken",
    "price": 120,
    "isAvailable": false
  },
  "greatLakes": {
    "catalog": "beer",
    "localisation": "Бар",
    "type": "product",
    "name": "Great Lakes",
    "price": 320,
    "isAvailable": true
  },
  "bellerose": {
    "catalog": "beer",
    "localisation": "Бар",
    "type": "product",
    "name": "Bellerose",
    "price": 350,
    "isAvailable": true
  },
  "oharas": {
    "catalog": "beer",
    "localisation": "Бар",
    "type": "product",
    "name": "O’Hara’s",
    "price": 470,
    "isAvailable": true
  },
  "lagunitas": {
    "catalog": "beer",
    "localisation": "Бар",
    "type": "product",
    "name": "Lagunitas",
    "price": 250,
    "isAvailable": true
  },
  "vermontBrewery": {
    "catalog": "beer",
    "localisation": "Бар",
    "type": "product",
    "name": "Vermont Brewery",
    "price": 270,
    "isAvailable": true
  },
  "soup": {
    "catalog": "kitchen",
    "type": "soup",
    "name": "Супы"
  },
  "minestrone": {
    "catalog": "soup",
    "localisation": "Кухня",
    "type": "product",
    "name": "Министроне ",
    "price": 450,
    "isAvailable": true,
  },
  "frenchOnionSoup": {
    "catalog": "soup",
    "localisation": "Кухня",
    "type": "product",
    "name": "Onion soup",
    "price": 500,
    "isAvailable": false,
  }
}

const menuCatalog = {
  "menu": {
    "catalog": null,
    "name": "Меню"
  },
  "bar": {
    "catalog": "menu",
    "type": "bar",
    "name": "Бар"
  },
  "kitchen": {
    "catalog": "menu",
    "type": "kitchen",
    "name": "Кухня"
  },
  "beer": {
    "catalog": "bar",
    "type": "beer",
    "name": "Пиво"
  },
  "soup": {
    "catalog": "kitchen",
    "type": "soup",
    "name": "Супы"
  },
}

// const menuProducts = {
//   "leaf": {
//     "catalog": "beer",
//     "localisation": "Бар",
//     "type": "product",
//     "name": "Leaf",
//     "price": 180,
//     "isAvailable": true
//   },
//   "hoegaarden": {
//     "catalog": "beer",
//     "localisation": "Бар",
//     "type": "product",
//     "name": "Hoegaarden",
//     "price": 200,
//     "isAvailable": true
//   },
//   "heineken": {
//     "catalog": "beer",
//     "localisation": "Бар",
//     "type": "product",
//     "name": "Heineken",
//     "price": 120,
//     "isAvailable": false
//   },
//   "minestrone": {
//     "catalog": "soup",
//     "localisation": "Кухня",
//     "type": "product",
//     "name": "Министроне ",
//     "price": 450,
//     "isAvailable": true,
//   }
// }

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
export const mainMenuGraph = {
  "menu": {
    "parent": null,
    "children": [menuCatalog.bar, menuCatalog.kitchen]
  },
  "kitchen": {
    "parent": "menu",
    "children": [menuCatalog.soup]
  },
  "soup": {
    "parent": "kitchen",
    "children": [menuProducts.minestrone]
  },
  "bar": {
    "parent": "menu",
    "children": [menuCatalog.beer]
  },
  "beer": {
    "parent": "bar",
    "children": [
      menuProducts.leaf,
      menuProducts.hoegaarden,
      menuProducts.heineken,
      menuProducts.greatLakes,
      menuProducts.bellerose
    ]
  },
}

const additiveMenuProducts = {
  "raspberrySyrup": {
    "catalog": "beer",
    "localisation": "Бар",
    "type": "product",
    "name": "Малиновый сироп",
    "price": 20,
    "isAvailable": true
  },
  "appleSyrup": {
    "catalog": "beer",
    "localisation": "Бар",
    "type": "product",
    "name": "Яблочный сироп",
    "price": 20,
    "isAvailable": true
  },
  "strawberrySyrup": {
    "catalog": "beer",
    "localisation": "Бар",
    "type": "product",
    "name": "Клубничный сироп",
    "price": 20,
    "isAvailable": true
  },
}

export const additiveMenuGraph = {
  "menu": {
    "parent": null,
    "children": [menuCatalog.bar, menuCatalog.kitchen]
  },
  "bar": {
    "parent": "bar",
    "children": [menuCatalog.beer]
  },
  "beer": {
    "parent": "menu",
    "children": [additiveMenuProducts.raspberrySyrup, additiveMenuProducts.appleSyrup, additiveMenuProducts.strawberrySyrup]
  },
}
