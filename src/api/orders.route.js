import { Router } from "express";
import OrdersController from "./orders.controller.js";

const router = new Router();

router.route("/orders/:id").get(OrdersController.getOrdersByWaiterId);

export default router;