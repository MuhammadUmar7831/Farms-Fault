import express from "express";
import { deleteUser, getUser, signin, signup, verify } from "../controllers/auth.controller.js";
import tryCatch from "../middlewares/tryCatch.js";
import { authenticate } from "../middlewares/authenticate.js";

const router = express.Router();

router.post("/signup", tryCatch(signup));
router.post("/signin", tryCatch(signin));
router.get("/verify", authenticate, tryCatch(verify));
router.get("/get/user", authenticate, tryCatch(getUser));
router.delete("/delete/user", authenticate, tryCatch(deleteUser));

export default router;
