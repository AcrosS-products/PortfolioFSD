import express from "express";
import { getAllProjects, getProjectById } from "../controllers/projectController.js";

const router = express.Router();

console.log(`projectRoutes file is in active state`);

router.get("/projects", getAllProjects);
router.get("/projects/:id", getProjectById);

export default router;
