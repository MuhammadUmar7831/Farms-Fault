import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    dob: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
      required: [true, "First name is required"],
      minlength: [3, "First name must be at least 3 characters long"], // Min length validation
    },
    lastName: {
      type: String,
      required: [true, "Last name is required"],
      minlength: [3, "Last name must be at least 3 characters long"], // Min length validation
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      validate: {
        validator: function (v) {
          return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); // Regular expression for validating email
        },
        message: (props) => `${props.value}`, // Custom error message for invalid email
      },
    },
    dob: {
      type: String,
      required: [true, "Date of birth is required"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
    },
    avatar: {
      type: String,
      default: "/avatar.jpg",
      required: [true, "Avatar is required"],
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
