export default class Adapter {
  static getCatalogs(catalogs) {
    return catalogs.map(it => ({
      id: it._id,
      name: it.name,
      parentId: it.parent_id,
      type: it.type,
      color: it.color,
      photo: it.photo,
      childrenId: it.children_id
    }))
  }

  static getProducts(products) {
    return products.map(it => ({
      id: it._id,
      name: it.name,
      parentId: it.parent_id,
      type: it.type,
      color: it.color,
      photo: it.photo,
      price: it.price,
      isAvailable: it.is_available
    }))
  }
}