import { Router } from "express";
import ProductsController from "./products.controller.js";

const router = new Router();

router.route("/products").get(ProductsController.getProducts);

export default router;