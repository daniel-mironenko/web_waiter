import {Router} from "express";
import PersonnelController from "./personnel.controller.js";

const router = new Router();

router.route("/login").post(PersonnelController.apiGetEmployerByPassWithOrders)

export default router;