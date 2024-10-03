import express from "express";
import tryCatch from "../middlewares/tryCatch.js";
import { addError, getError } from "../controllers/errorReport.controller.js";

const router = express.Router();

router.post("/add", tryCatch(addError));
router.get("/get", tryCatch(getError));

export default router;
