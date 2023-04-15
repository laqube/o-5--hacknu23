import express from "express";

import {
    createOrder,
    deleteOrder,
    getAllOrders,
    getOrderDetail,
    updateOrder,
} from "../controllers/order.controller.js";

const router = express.Router();

router.route("/").get(getAllOrders);
router.route("/:id").get(getOrderDetail);
router.route("/").post(createOrder);
router.route("/:id").patch(updateOrder);
router.route("/:id").delete(deleteOrder);

export default router;