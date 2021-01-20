export default class ProductsDAO {
  static async injectDB(conn) {
    if (this.collection) {
      return;
    }
    try {
      this.collection = conn.db(process.env.DINNER_IN_THE_SKY_NS).collection("products");
    } catch (error) {
      `Unable to establish a collection handle in ProductsDAO: ${e}`
    }
  }

  static async getProducts() {
    try {
      return await this.collection.find({}).toArray();
    } catch (e) {
      console.error(`Something went wrong in getProducts ${e}`);
    }
  }
}