import jwt from "jsonwebtoken";
import { errorHandler } from "../errors/error.js";
import User from "../models/user.model.js";

export const authenticate = async (req, res, next) => {
  try {
    const token = req.cookies["access_token"];
    if (!token) return next(errorHandler(401, "Please Login to Continue."));
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (user === null) {
      return next(errorHandler(404, "Please Login to Continue."));
    }
    req.userId = decoded.id;
    next();
  } catch (error) {
    next(error);
  }
};
