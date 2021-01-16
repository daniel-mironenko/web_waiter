import MenuDAO from "../dao/MenuDAO.js";

export default class MenuController {
  static async apiGetCatalogs(req, res, next) {
    try {
      const catalogs = await MenuDAO.getCatalogs();
      if (!catalogs) {
        res.status(404).json({ error: "Not found" });
      }
      res.status(200).json(catalogs);
    } catch (error) {
      res.status(500).json({ error: e });
    }
  }
}

