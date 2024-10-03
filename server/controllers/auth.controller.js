import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../errors/error.js";
import User from "../models/user.model.js";

export const signup = async (req, res, next) => {
  const { firstName, lastName, dob, password, avatar } = req.body;
  const salt = parseInt(process.env.SALT);
  const hashedPassword = bcryptjs.hashSync(password, salt);
  const newUser = new User({ firstName, lastName, dob, password: hashedPassword, avatar });
  await newUser.save();
  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
  const { password: pass, ...user } = newUser._doc;
  res
    .cookie("access token", token, { httpOnly: true })
    .status(201)
    .send({ user, success: true });
  if (error.code === 11000) {
    next(errorHandler(400, "email already registered"));
  } else {
    next(error);
  }
};

export const signin = (req, res, next) => {
  return res.status(200).send({ hello: "world" });
};
