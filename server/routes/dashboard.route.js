import express from "express";
import tryCatch from "../middlewares/tryCatch.js";
import { getUserStats } from "../controllers/dashboard.controller.js";
const router = express.Router();

router.post("/getUserStats", tryCatch(getUserStats));

export default router;