import {Router} from "express";
import PersonnelController from "./personnel.controller.js";

const router = new Router();

router.route("/personnel/login").post(PersonnelController.apiGetEmployerByPassWithOrders)
router.route("/personnel/:position").get(PersonnelController.apiGetEmployersByPosition);

export default router;