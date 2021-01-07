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
//   "greatLakes": {
//     "catalog": "beer",
//     "localisation": "Бар",
//     "type": "product",
//     "name": "Great Lakes",
//     "price": 320,
//     "isAvailable": true
//   },
//   "bellerose": {
//     "catalog": "beer",
//     "localisation": "Бар",
//     "type": "product",
//     "name": "Bellerose",
//     "price": 350,
//     "isAvailable": true
//   },
//   "oharas": {
//     "catalog": "beer",
//     "localisation": "Бар",
//     "type": "product",
//     "name": "O’Hara’s",
//     "price": 470,
//     "isAvailable": true
//   },
//   "lagunitas": {
//     "catalog": "beer",
//     "localisation": "Бар",
//     "type": "product",
//     "name": "Lagunitas",
//     "price": 250,
//     "isAvailable": true
//   },
//   "vermontBrewery": {
//     "catalog": "beer",
//     "localisation": "Бар",
//     "type": "product",
//     "name": "Vermont Brewery",
//     "price": 270,
//     "isAvailable": true
//   },
//   "minestrone": {
//     "catalog": "soup",
//     "localisation": "Кухня",
//     "type": "product",
//     "name": "Министроне ",
//     "price": 450,
//     "isAvailable": true,
//   },
//   "frenchOnionSoup": {
//     "catalog": "soup",
//     "localisation": "Кухня",
//     "type": "product",
//     "name": "Onion soup",
//     "price": 500,
//     "isAvailable": false,
//   }
// }

// const menuCatalog = {
//   "menu": {
//     "catalog": null,
//     "name": "Меню"
//   },
//   "bar": {
//     "catalog": "menu",
//     "type": "bar",
//     "name": "Бар"
//   },
//   "kitchen": {
//     "catalog": "menu",
//     "type": "kitchen",
//     "name": "Кухня"
//   },
//   "beer": {
//     "catalog": "bar",
//     "type": "beer",
//     "name": "Пиво"
//   },
//   "soup": {
//     "catalog": "kitchen",
//     "type": "soup",
//     "name": "Супы"
//   },
// }

// const menuCatalog1 = {
//   "menu": {
//     "parent": null,
//     "title": "Меню",
//     "children": [menuCatalog.bar, menuCatalog.kitchen]
//   },
//   "bar": {
//     "parent": "menu",
//     "type": "bar",
//     "title": "Бар"
//   },
//   "kitchen": {
//     "parent": "menu",
//     "type": "kitchen",
//     "title": "Кухня",
//     "children": [menuCatalog.soup]
//   },
//   "beer": {
//     "parent": "bar",
//     "type": "beer",
//     "title": "Пиво",
//     "children": [
//       menuProducts.leaf,
//       menuProducts.hoegaarden,
//       menuProducts.heineken,
//       menuProducts.greatLakes,
//       menuProducts.bellerose
//     ]
//   },
//   "soup": {
//     "parent": "kitchen",
//     "type": "soup",
//     "title": "Супы",
//     "children": [menuCatalog.beer]
//   },
// }

// // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// export const menu = {
//   "menu": {
//     "parent": null,
//     "title": "Меню",
//     "children": [menuCatalog.bar, menuCatalog.kitchen]
//   },
//   "kitchen": {
//     "parent": "menu",
//     "children": [menuCatalog.soup]
//   },
//   "soup": {
//     "parent": "kitchen",
//     "children": [menuProducts.minestrone]
//   },
//   "bar": {
//     "parent": "menu",
//     "children": [menuCatalog.beer]
//   },
//   "beer": {
//     "parent": "bar",
//     "children": [
//       menuProducts.leaf,
//       menuProducts.hoegaarden,
//       menuProducts.heineken,
//       menuProducts.greatLakes,
//       menuProducts.bellerose
//     ]
//   },
// }

// const product = {
//   "tiramisu": {
//     id: 1,
//     productName: "Тирамису",
//     price: 5,
//     catalog: "Дисерты",
//     department: "Кухня",
//     isAvailable: true,
//     color: "",
//     img: "",
//   }
// };

// const catalogs = {
//   1: {
//     parentCategory: 0,
//     categoryName: "Меню",
//     categoryPhoto: null,
//     categoryColor: "white"
//   },
//   2: {
//     parentCategory: 1,
//     categoryName: "Кухня",
//     categoryPhoto: null,
//     categoryColor: "blue"
//   },
//   3: {
//     parentCategory: 1,
//     categoryName: "Бар",
//     categoryPhoto: null,
//     categoryColor: "orange"
//   }
// }

export const menu = {
  "graph": {
    "menu": ["bar", "kitchen"],
    "kitchen": ["soup"],
    "soup": ["minestrone", "frenchOnionSoup"],
    "bar": ["beer"],
    "beer": ["leaf", "hoegaarden", "heineken", "greatLakes", "bellerose", "oharas", "vermontBrewery", "lagunitas"]
  },

  "nodes": {
    "menu": {
      "catalog": null,
      "name": "Меню",
    },
    "bar": {
      "catalog": "menu",
      "type": "bar",
      "name": "Бар",
      color: "orange",
      photo: "https://i.pinimg.com/originals/a9/5c/64/a95c64b8477f1a5ef0c0e79e5856eb63.jpg",
    },
    "kitchen": {
      "catalog": "menu",
      "type": "kitchen",
      "name": "Кухня",
      color: "#80b918",
      photo: "https://gatemagazine.co.uk/wp-content/uploads/2019/09/open-kitchen_2_filip-slapal-1024x683.jpg",
    },
    "beer": {
      "catalog": "bar",
      "type": "beer",
      "name": "Пиво",
      color: "orange",
      photo: "https://img.gazeta.ru/files3/159/8045159/Craft-Beer-pic905-895x505-78380.jpg",
    },
    "leaf": {
      "catalog": "beer",
      "localisation": "Бар",
      "type": "product",
      "name": "Leaf",
      "price": 180,
      "isAvailable": true,
      color: "#f94144",
      photo: null,
    },
    "hoegaarden": {
      "catalog": "beer",
      "localisation": "Бар",
      "type": "product",
      "name": "Hoegaarden",
      "price": 200,
      "isAvailable": true,
      color: "#8338ec",
      photo: "data:image/jpeg;base64,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"
    },
    "heineken": {
      "catalog": "beer",
      "localisation": "Бар",
      "type": "product",
      "name": "Heineken",
      "price": 120,
      "isAvailable": false,
      color: "#6d597a",
      photo: "https://stoneforest.ru/wp-content/uploads/2015/05/Heineken-beer-1.jpg",
    },
    "greatLakes": {
      "catalog": "beer",
      "localisation": "Бар",
      "type": "product",
      "name": "Great Lakes",
      "price": 320,
      "isAvailable": true,
      color: "#00b4d8",
      photo: null,
    },
    "bellerose": {
      "catalog": "beer",
      "localisation": "Бар",
      "type": "product",
      "name": "Bellerose",
      "price": 350,
      "isAvailable": true,
      color: "#d62828",
      photo: null,
    },
    "oharas": {
      "catalog": "beer",
      "localisation": "Бар",
      "type": "product",
      "name": "O’Hara’s",
      "price": 470,
      "isAvailable": true,
      color: "orange",
      photo: null,
    },
    "lagunitas": {
      "catalog": "beer",
      "localisation": "Бар",
      "type": "product",
      "name": "Lagunitas",
      "price": 250,
      "isAvailable": true,
      color: "orange",
      photo: null,
    },
    "vermontBrewery": {
      "catalog": "beer",
      "localisation": "Бар",
      "type": "product",
      "name": "Vermont Brewery",
      "price": 270,
      "isAvailable": true,
      color: "#003f88",
      photo: null,
    },
    "soup": {
      "catalog": "kitchen",
      "type": "soup",
      "name": "Супы",
      color: "orange",
      photo: "https://img.tsn.ua/cached/1533906227/tsn-e3716eb1c55ff650a9da4a193f7b6ebf/thumbs/1340x530/e7/a0/0f6e138f56dd8d29c2d67453b5e1a0e7.jpeg",
    },
    "minestrone": {
      "catalog": "soup",
      "localisation": "Кухня",
      "type": "product",
      "name": "Министроне ",
      "price": 450,
      "isAvailable": true,
      color: "#0f4c5c",
      photo: "https://www.gastronom.ru/binfiles/images/20180411/b6657d69.jpg",
    },
    "frenchOnionSoup": {
      "catalog": "soup",
      "localisation": "Кухня",
      "type": "product",
      "name": "Onion soup",
      "price": 500,
      "isAvailable": false,
      color: "#ffbe0b",
      photo: "https://www.gastronom.ru/binfiles/images/20180216/b7343f01.jpg",
    }
  }
}


