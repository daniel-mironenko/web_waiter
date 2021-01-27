import { ObjectId } from "../../index.js";
import SuperDAO from "./superDAO.js";

class OrdersDAO extends SuperDAO {
  async addActiveOrder(orderId, waiterId, tableNumber, guestsCount) {
    try {
      return await this.collection.insertOne({
        _id: orderId,
        table_number: tableNumber, 
        guests_count: guestsCount, 
        waiter_id: ObjectId(waiterId),
        date_start: new Date(),
        date_close: null,
        order_list: [],
        history_order: []
      })
    } catch (error) {
      console.error(`Something went wrong in addActiveOrder: ${e}`);
      throw e;
    }
  }

  async getActiveOrdersByUserId(id) {
    try {
      const cursor = await this.collection.find({ waiter_id: ObjectId(id), date_close: {"$eq": null} });
      return await cursor.toArray();
    } catch (error) {
      console.error(`Something went wrong in getOrdersByUserId: ${e}`);
      throw e;
    }
  }

  async getOrderById(id) {
    try {
      return await this.collection.findOne({_id: id});
    } catch (error) {
      console.error(`Something went wrong in getOrderById: ${e}`);
      throw e;
    }
  }

  async updateOrder(payload) {
    try {
      return await this.collection.updateOne({_id: payload._id}, {"$set": payload})
    } catch (error) {
      console.error(`Unable to update order: ${e}`)
      return { error: e }
    }
  }
}

const ordersDAO = new OrdersDAO();
export default ordersDAO;
