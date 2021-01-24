import SuperDAO from "./superDAO.js";

class CatalogsDAO extends SuperDAO {
  async getCatalogs() {
    try {
      return await this.collection.find({}).toArray();
    } catch (e) {
      console.error(`Something went wrong in getCatalogs: ${e}`);
    }
  }
}

const catalogsDAO = new CatalogsDAO();
export default catalogsDAO;
