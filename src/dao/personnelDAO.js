import { response } from "express";
import SuperDAO from "./superDAO.js";

class PersonnelDAO extends SuperDAO {
  async getEmployerByPass(user) {
    const { pass, position } = user;
    try {
      return await this.collection.findOne({ pass: pass, position: position }, { projection: { pass: 0 } });
    } catch (e) {
      console.error(`Something went wrong in getEmployerByPass: ${e}`);
      throw e;
    }
  }

  async getEmployerByPassWithOrders(user) {
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

const personnelDAO = new PersonnelDAO();

export default personnelDAO;
