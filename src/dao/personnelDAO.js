import { response } from "express";

export default class PersonnelDAO {
  static async injectDB(conn) {
    if (this.collection) {
      return;
    }
    try {
      this.collection = await conn.db(process.env.DINNER_IN_THE_SKY_NS).collection("personnel");
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in PersonnelDAO: ${e}`,
      );
    }
  }

  static async getEmployerByPass(user) {
    const { pass, position } = user;
    try {
      return await this.collection.findOne({ pass: pass, position: position }, { projection: { pass: 0 } });
    } catch (e) {
      console.error(`Something went wrong in getEmployerByPass: ${e}`);
      throw e;
    }
  }

  static async getEmployerByPassWithOrders(user) {
    const { pass, position } = user;

    try {
      return await this.collection.aggregate([
        {
          '$match': {
            'pass': pass, 
            'position': position
          }
        }, {
          '$project': {
            'pass': 0
          }
        }, {
          '$lookup': {
            'from': 'orders', 
            'localField': '_id', 
            'foreignField': 'waiter_id', 
            'as': 'orders'
          }
        }
      ]).next();
    } catch (e) {
      console.error(`Something went wrong in getEmployerByPass: ${e}`);
      throw e;
    }
  }
}
