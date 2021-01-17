import {Router} from "express";
import CatalogsController from "./catalogs.controller.js";

const router = new Router();

router.route("/catalogs").get(CatalogsController.apiGetCatalogs);

export default router;