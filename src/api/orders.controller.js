import OrdersDAO from "../dao/ordersDAO.js";

export default class OrdersController {
  static async apiGetOrdersByWaiterId(req, res, next) {
    try {
      const waiterId = req.params.id;
      const orders = await OrdersDAO.getOrdersByUserId(waiterId);
      if (!orders) {
        res.status(404).json({ error: "Not found" });
      }
      res.status(200).json(orders);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}