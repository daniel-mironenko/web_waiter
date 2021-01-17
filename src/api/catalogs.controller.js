import CatalogsDAO from "../dao/catalogsDAO.js";

export default class CatalogsController {
  static async apiGetCatalogs(req, res, next) {
    try {
      const catalogs = await CatalogsDAO.getCatalogs();
      if (!catalogs) {
        res.status(404).json({ error: "Not found" });
      }
      res.status(200).json(catalogs);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
}

