import SuperDAO from "./superDAO.js";
class ProductsDAO extends SuperDAO {
  async getProducts() {
    try {
      return await this.collection.find({}).toArray();
    } catch (e) {
      console.error(`Something went wrong in getProducts ${e}`);
    }
  }
}

const productsDAO = new ProductsDAO();
export default productsDAO;
