import express from "express";
import { submitContact, getSubmissions } from "../controllers/contactController.js";

const router = express.Router();

console.log(`contactRoutes active`);

router.post("/contact", submitContact);
router.get("/contact", getSubmissions);

export default router;
