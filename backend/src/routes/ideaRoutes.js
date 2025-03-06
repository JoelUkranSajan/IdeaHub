import express from "express";
import { getIdeas, createIdea, deleteIdea } from "../controllers/ideaController.js";

const router = express.Router();

// API Endpoints
router.get("/", getIdeas);         // GET /api/ideas → Get all ideas
router.post("/", createIdea);      // POST /api/ideas → Create a new idea
router.delete("/:id", deleteIdea); // DELETE /api/ideas/:id → Delete an idea

export default router;
