import express from "express";
import { signin, signup, verify } from "../controllers/auth.controller.js";
import tryCatch from "../middlewares/tryCatch.js";
import { authenticate } from "../middlewares/authenticate.js";

const router = express.Router();

router.post("/signup", tryCatch(signup));
router.post("/signin", tryCatch(signin));
router.get("/verify", authenticate, tryCatch(verify));

export default router;
