import express from "express";
import {
  getAllClients,
  createClient,
  getClientInfoByID,
} from "../controllers/client.controller.js";

const router = express.Router();

router.route("/").get(getAllClients).post(createClient);
router.route("/:id").get(getClientInfoByID);

export default router;
