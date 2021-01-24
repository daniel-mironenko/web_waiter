export class Adapter {
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

  static getOrder(order) {
    return {
      id: order._id,
      tableNumber: order.table_number,
      guestsCount: order.guests_count,
      dateStart: order.date_start,
      dateClose: order.date_close,
      orderList: order.order_list,
      historyOrder: order.history_order
    }
  }
}
