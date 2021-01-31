import CountersDAO from "../dao/countersDAO.js";
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
      const orderResponse = await OrdersDAO.updateOrder(req.body);

      if (orderResponse.modifiedCount === 0) {
        throw new Error(
          "unable to update order",
        )
      }

      const updatedOrder = await OrdersDAO.getOrderById(req.body._id);

      res.status(200).json(updatedOrder);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async apiAddActiveOrder(req, res, next) {
    try {
      const { waiterId, tableNumber, guestsCount } = req.body;
      const orderId = await CountersDAO.getSequenceValue("orderid");
      const orderResponse = await OrdersDAO.addActiveOrder(orderId, waiterId, tableNumber, guestsCount);
      await CountersDAO.incSequenceValue("orderid")
      const newOrder = await OrdersDAO.getOrderById(orderResponse.insertedId);

      res.status(200).json(newOrder);
    } catch (error) {
      res.status(500).json({ error })
    }
  }
}