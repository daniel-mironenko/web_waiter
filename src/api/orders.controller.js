import OrdersDAO from "../dao/ordersDAO.js";

export default class OrdersController {
  static async apiGetActiveOrdersByWaiterId(req, res, next) {
    try {
      const waiterId = req.params.id;
      const orders = await OrdersDAO.getActiveOrdersByUserId(waiterId);
      if (!orders) {
        res.status(404).json({ error: "Not found" });
      }
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async apiUpdateOrder(req, res, next) {
    try {
      const {id, orderList} = req.body;

      const orderResponse = await OrdersDAO.updateOrderById(id, orderList);

      if (orderResponse.modifiedCount === 0) {
        throw new Error(
          "unable to update order",
        )
      }
      
      const updatedOrder = await OrdersDAO.getOrderById(id);

      res.status(200).json(updatedOrder);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}