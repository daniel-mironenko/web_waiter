import PersonnelDAO from "../dao/personnelDAO.js";

export default class PersonnelController {
  static async apiGetEmployerByPass(req, res, next) {
    try {
      const pass = Number(req.params.pass);
      const employer = await PersonnelDAO.getEmployerByPass(pass);
      if (!employer) {
        res.status(404).json({ error: "Not found" });
      }
      res.status(200).json(employer);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }
}
