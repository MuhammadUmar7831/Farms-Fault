import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../errors/error.js";
import User from "../models/user.model.js";

export const signup = async (req, res, next) => {
  const { firstName, lastName, email, dob, password, avatar, remember } =
    req.body;
  // firstName, lastName and email validation is handeled by mongoose refer /models/user.model.js

  // password validation
  const salt = parseInt(process.env.SALT);
  const hashedPassword = bcryptjs.hashSync(password, salt);
  const newUser = new User({
    firstName,
    lastName,
    dob,
    password: hashedPassword,
    avatar,
    email,
  });
  await newUser.save();
  const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET);
  const { password: pass, ...user } = newUser._doc;
  if (remember) {
    return res
      .cookie("access_token", token, { httpOnly: true })
      .status(201)
      .send({ success: true, data: user });
  } else {
    return res.status(201).send({ success: true, data: user });
  }
};

export const signin = async (req, res, next) => {
  console.log('first')
  const { email, password } = req.body;
  const validUser = await User.findOne({ email });
  if (!validUser) return next(errorHandler(404, "User not found!"));
  const validPassword = bcryptjs.compareSync(password, validUser.password);
  if (!validPassword) return next(errorHandler(401, "Wrong Credentials!"));
  const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
  return res
    .cookie("access_token", token, { httpOnly: true })
    .status(201)
    .send({ success: true, message: "Login Successfull!" });
};

export async function verify(req, res, next) {
  return res
    .status(200)
    .send({ success: true, message: "Authentication Successfull." });
}
