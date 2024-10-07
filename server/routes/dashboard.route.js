import express from "express";
import tryCatch from "../middlewares/tryCatch.js";
import {  getLastTenErrors, getUserStats, getTopUsers } from "../controllers/dashboard.controller.js";
// import { authenticate } from "../middlewares/authenticate.js";

const router = express.Router();
router.post("/getUserStats", tryCatch(getUserStats));
router.post("/getUserErrors", tryCatch(getLastTenErrors));
router.get("/getTopUsers",tryCatch(getTopUsers));

export default router;