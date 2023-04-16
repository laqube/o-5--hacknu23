import express from "express";
import {
  getAllBrigada,
  createBrigada,
  getBrigadaInfoByID,
  updateBrigada,
  deleteBrigada,
} from "../controllers/brigada.controller.js";

const router = express.Router();

// GET all Brigada
router.get("/", getAllBrigada);

// GET Brigada by ID
router.get("/:id", getBrigadaInfoByID);

// CREATE new Brigada
router.post("/", createBrigada);

// UPDATE Brigada by ID
router.put("/:id", updateBrigada);

// DELETE Brigada by ID
router.delete("/:id", deleteBrigada);

export default router;
