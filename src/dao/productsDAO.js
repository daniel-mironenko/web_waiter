import SuperDAO from "./superDAO.js";
class ProductsDAO extends SuperDAO {
  async getProducts() {
    try {
      return await this.collection.find({}).toArray();
    } catch (e) {
      console.error(`Something went wrong in getProducts ${e}`);
    }
  }

  async getNotAvailableProducts() {
    try {
      return await this.collection.aggregate([
        {
          '$match': {
            'is_available': false
          }
        }, {
          '$lookup': {
            'from': 'catalogs',
            'let': {
              'parent_id': '$parent_id'
            },
            'pipeline': [
              {
                '$match': {
                  '$expr': {
                    '$eq': [
                      '$_id', '$$parent_id'
                    ]
                  }
                }
              }, {
                '$project': {
                  'name': 1,
                  '_id': 0
                }
              }
            ],
            'as': 'catalog'
          }
        }, {
          '$addFields': {
            'catalog': {
              '$first': '$catalog.name'
            }
          }
        }
      ]).toArray();
    } catch (error) {
      console.error(`Something went wrong in getNotAvailableProducts ${e}`);
    }
  }
}

const productsDAO = new ProductsDAO();
export default productsDAO;
