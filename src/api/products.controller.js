import ProductsDAO from "../dao/productsDAO.js";

export default class ProductsController {
  static async getProducts(req, res, next) {
    try {
      const products = await ProductsDAO.getProducts();
      if (!products) {
        res.status(404).json({ error: "Not found" });
      }
      res.status(200).json(products);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }

  static async getNotAvailableProducts(req, res, next) {
    try {
      const products = await ProductsDAO.getNotAvailableProducts();
      if (!products) {
        res.status(404).json({ error: "Not found" });
      }
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}