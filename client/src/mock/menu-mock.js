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
      photo: null,
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


