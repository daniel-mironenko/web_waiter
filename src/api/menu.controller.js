import CatalogsDAO from "../dao/catalogsDAO.js";
import ProductsDAO from "../dao/productsDAO.js";

export default class MenuController {
  static async getMenu(req, res, next) {
    try {
      const catalogs = await CatalogsDAO.getCatalogs();
      const products = await ProductsDAO.getProducts();
      if (!catalogs || !products) {
        res.status(404).json({ error: "Not found"});
      }
      res.status(200).json({catalogs, products});
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
}