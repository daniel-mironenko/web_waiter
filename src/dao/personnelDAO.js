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
            'let': {
              'id': '$_id'
            }, 
            'pipeline': [
              {
                '$match': {
                  '$expr': {
                    '$and': [
                      {
                        '$eq': [
                          '$waiter_id', '$$id'
                        ]
                      }, {
                        '$eq': [
                          '$date_close', null
                        ]
                      }
                    ]
                  }
                }
              }
            ], 
            'as': 'orders'
          }
        }
      ]).next();
    } catch (e) {
      console.error(`Something went wrong in getEmployerByPass: ${e}`);
      throw e;
    }
  }

  async getEmployersByPosition(position) {
    try {
      return await this.collection.find({position}, { projection: { pass: 0 } }).toArray();
    } catch (error) {
      console.error(`Something went wrong in getEmployersByPosition: ${e}`);
      throw e;
    }
  }
}

const personnelDAO = new PersonnelDAO();

export default personnelDAO;
