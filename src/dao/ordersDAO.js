import { ObjectId } from "../../index.js";

export default class OrdersDAO {
  static async injectDB(conn) {
    if (this.collection) {
      return;
    }
    try {
      this.collection = await conn.db(process.env.DINNER_IN_THE_SKY_NS).collection("orders");
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in OrdersDAO: ${e}`,
      );
    }
  }

  static async getOrdersByUserId(id) {
    try {
      const cursor = await this.collection.find({ waiter_id: ObjectId(id) }, {projected: {waiter_id: 0}});
      return await cursor.toArray();
    } catch (error) {
      console.error(`Something went wrong in getOrdersByUserId: ${e}`);
      throw e;
    }
  }
}