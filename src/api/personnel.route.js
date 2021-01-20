import {Router} from "express";
import PersonnelController from "./personnel.controller.js";

const router = new Router();

// router.route("/pass/:pass").get(PersonnelController.apiGetEmployerByPass);
router.route("/login").post(PersonnelController.apiGetEmployerByPass)

export default router;