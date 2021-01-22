import { Router } from "express";
import OrdersController from "./orders.controller.js";

const router = new Router();

router.route("/orders/:id").get(OrdersController.apiGetOrdersByWaiterId);

export default router;