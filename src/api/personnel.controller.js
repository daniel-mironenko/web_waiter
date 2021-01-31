import PersonnelDAO from "../dao/personnelDAO.js";

export default class PersonnelController {
  static async apiGetEmployerByPass(req, res, next) {
    try {
      const employer = await PersonnelDAO.getEmployerByPass(req.body);
      if (!employer) {
        res.status(404).json({ error:  "Make sure your pass is correct." });
        return;
      }
      res.status(200).json(employer);
    } catch (e) {
      res.status(500).json({ error: e });
    }
  }

  static async apiGetEmployerByPassWithOrders(req, res, next) {
    try {
      const employer = await PersonnelDAO.getEmployerByPassWithOrders(req.body);
      if (!employer) {
        res.status(404).json({ error:  "Make sure your pass is correct." });
        return;
      }
      res.status(200).json(employer);
    } catch (error) {
      res.status(500).json({ error });
    }
  }

  static async apiGetEmployersByPosition(req, res, next) {

    try {
      const position = req.params.position;
      const employers = await PersonnelDAO.getEmployersByPosition(position);

      if (!employers) {
        res.status(404).json({ error:  "Make sure your position is correct." });
        return;
      }

      res.status(200).json(employers);
    } catch (error) {
      res.status(500).json({ error });
    }
  }
}
