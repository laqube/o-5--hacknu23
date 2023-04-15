import express from "express";

import {
    createOper,
    getAllOpers,
    getOperrInfoByID,
} from "../controllers/oper.controller.js";

const router = express.Router();

router.route("/").get(getAllOpers);
router.route("/").post(createOper);
router.route("/:id").get(getOperrInfoByID);

export default router;