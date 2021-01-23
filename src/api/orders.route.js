import { Router } from "express";
import OrdersController from "./orders.controller.js";

const router = new Router();

router.route("/orders/:id").get(OrdersController.apiGetActiveOrdersByWaiterId);
router.route("/order").put(OrdersController.apiUpdateOrder);

export default router;