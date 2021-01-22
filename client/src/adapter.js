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

  static getUser(user) {
    return {
      id: user._id,
      name: user.name,
      surname: user.surname,
      photo: user.photo,
      isAdmin: user.is_admin,
      position: user.position
    }
  }

  static getLoginUser(user) {
    return {
      id: user._id,
      name: user.name,
      surname: user.surname,
      photo: user.photo,
      isAdmin: user.is_admin,
      position: user.position,
      orders: user.orders
    }
  }

  static getOrders(odresr) {
    return odresr.map(it => ({
      id: it._id,
      tableNumber: it.table_number,
      guestsCount: it.guests_count,
      dateStart: it.date_start,
      dateClose: it.date_close,
      orderName: it.order_name,
      orderList: it.order_list
    }))
  }
}