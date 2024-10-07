import express from "express";
import tryCatch from "../middlewares/tryCatch.js";
import { getLeaderboardUsers } from "../controllers/leaderboard.controller.js";
const router = express.Router();

router.get("/getleaderboardUsers", tryCatch(getLeaderboardUsers));

export default router;
