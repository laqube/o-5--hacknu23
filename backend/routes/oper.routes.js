import express from "express";

import {
    createOper,
    getAllOpers,
    getOperInfoByID,
} from "../controllers/oper.controller.js";

const router = express.Router();

router.route("/").get(getAllOpers);
router.route("/").post(createOper);
router.route("/:id").get(getOperInfoByID);

export default router;