import {Router} from "express";
import MenuController from "./menu.controller.js";

const router = new Router();

router.route("/menu").get(MenuController.getMenu);

export default router;